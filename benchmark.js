const fs = require('fs');

global.lyricsBodyEl = {};
global.setLyricsMessage = () => {};
global.setLyricsCues = () => {};
global.setLyricsLines = () => {};
global.parseSyncedLyrics = () => [{ time: 0, text: 'test' }];
global.parsePlainLyrics = () => ['test'];
global.console.warn = () => {};

let fetchCount = 0;
global.fetch = async (url) => {
  fetchCount++;
  await new Promise(r => setTimeout(r, 100)); // Simulate network latency
  return {
    ok: true,
    json: async () => ({ syncedLyrics: "[00:00.00] test lyrics" })
  };
};

// Paste original fetchLyrics
const fetchLyricsOriginal = async (artist, title) => {
  if (!lyricsBodyEl) {
    return;
  }
  setLyricsMessage("Loading lyrics...");
  const safeArtist = artist || "";
  const safeTitle = title || "";
  try {
    const response = await fetch(
      `https://lrclib.net/api/get?artist_name=${encodeURIComponent(
        safeArtist
      )}&track_name=${encodeURIComponent(safeTitle)}`
    );
    if (response.ok) {
      const payload = await response.json();
      const syncedLyrics =
        payload?.syncedLyrics || payload?.synced_lyrics || null;
      if (syncedLyrics) {
        const cues = parseSyncedLyrics(syncedLyrics);
        if (cues.length) {
          setLyricsCues(cues);
          return;
        }
      }
      const plainLyrics =
        payload?.plainLyrics || payload?.plain_lyrics || payload?.lyrics || null;
      if (plainLyrics) {
        const lines = parsePlainLyrics(plainLyrics);
        if (lines.length) {
          setLyricsLines(lines);
          return;
        }
      }
    }
  } catch (error) {
    console.warn("Synced lyrics fetch failed", error);
  }
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${encodeURIComponent(
        safeArtist
      )}/${encodeURIComponent(
        safeTitle
      )}`
    );
    if (!response.ok) {
      throw new Error("Lyrics request failed");
    }
    const payload = await response.json();
    if (!payload || typeof payload.lyrics !== "string") {
      throw new Error("Lyrics payload invalid");
    }
    const lines = parsePlainLyrics(payload.lyrics);
    setLyricsLines(lines);
  } catch (error) {
    console.warn("Lyrics fetch failed", error);
    setLyricsMessage("Lyrics unavailable for this track.");
  }
};

const lyricsCache = {};
const fetchLyricsOptimized = async (artist, title) => {
  if (!lyricsBodyEl) {
    return;
  }
  const safeArtist = artist || "";
  const safeTitle = title || "";
  const cacheKey = `${safeArtist}|${safeTitle}`;
  if (lyricsCache[cacheKey]) {
      const cached = lyricsCache[cacheKey];
      if (cached.cues) {
          setLyricsCues(cached.cues);
          return;
      }
      if (cached.lines) {
          setLyricsLines(cached.lines);
          return;
      }
  }
  setLyricsMessage("Loading lyrics...");
  try {
    const response = await fetch(
      `https://lrclib.net/api/get?artist_name=${encodeURIComponent(
        safeArtist
      )}&track_name=${encodeURIComponent(safeTitle)}`
    );
    if (response.ok) {
      const payload = await response.json();
      const syncedLyrics =
        payload?.syncedLyrics || payload?.synced_lyrics || null;
      if (syncedLyrics) {
        const cues = parseSyncedLyrics(syncedLyrics);
        if (cues.length) {
          lyricsCache[cacheKey] = { cues };
          setLyricsCues(cues);
          return;
        }
      }
      const plainLyrics =
        payload?.plainLyrics || payload?.plain_lyrics || payload?.lyrics || null;
      if (plainLyrics) {
        const lines = parsePlainLyrics(plainLyrics);
        if (lines.length) {
          lyricsCache[cacheKey] = { lines };
          setLyricsLines(lines);
          return;
        }
      }
    }
  } catch (error) {
    console.warn("Synced lyrics fetch failed", error);
  }
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${encodeURIComponent(
        safeArtist
      )}/${encodeURIComponent(
        safeTitle
      )}`
    );
    if (!response.ok) {
      throw new Error("Lyrics request failed");
    }
    const payload = await response.json();
    if (!payload || typeof payload.lyrics !== "string") {
      throw new Error("Lyrics payload invalid");
    }
    const lines = parsePlainLyrics(payload.lyrics);
    lyricsCache[cacheKey] = { lines };
    setLyricsLines(lines);
  } catch (error) {
    console.warn("Lyrics fetch failed", error);
    setLyricsMessage("Lyrics unavailable for this track.");
  }
};


async function runBenchmark() {
  const iterations = 5;

  console.log("Running Baseline...");
  fetchCount = 0;
  let start = performance.now();
  for (let i = 0; i < iterations; i++) {
    await fetchLyricsOriginal("Artist", "Title");
  }
  let end = performance.now();
  const baselineTime = end - start;
  const baselineFetches = fetchCount;

  console.log("Running Optimized...");
  fetchCount = 0;
  start = performance.now();
  for (let i = 0; i < iterations; i++) {
    await fetchLyricsOptimized("Artist", "Title");
  }
  end = performance.now();
  const optimizedTime = end - start;
  const optimizedFetches = fetchCount;

  console.log(`\nResults (over ${iterations} calls):`);
  console.log(`Baseline:  ${baselineTime.toFixed(2)} ms, ${baselineFetches} network requests`);
  console.log(`Optimized: ${optimizedTime.toFixed(2)} ms, ${optimizedFetches} network requests`);
  console.log(`Improvement: ${(baselineTime / optimizedTime).toFixed(2)}x faster (${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}% reduction in time)`);
}

runBenchmark();
