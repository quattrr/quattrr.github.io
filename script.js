const LANYARD_ID = "664103194162495488";
const ROBLOX_USER_ID = 789998007;
const ROBLOX_USERNAME_FALLBACK = "aleblox0006";
const STATUS_FALLBACK = "Hallo:)";
const ROBLOX_REFRESH_INTERVAL = 300000;
const MAX_COLLECTIBLE_PAGINATION_ATTEMPTS = 8;
const ROBLOX_PRESENCE_OFFLINE = 0;
const ROBLOX_PRESENCE_ONLINE = 1;
const ROBLOX_PRESENCE_IN_GAME = 2;
const ROBLOX_PRESENCE_IN_STUDIO = 3;
const STAR_TWINKLE_MIN = 0.004;
const STAR_TWINKLE_MAX = 0.012;
const STATUS_COLORS = {
  online: "#3ba55c",
  idle: "#faa61a",
  dnd: "#ed4245",
  streaming: "#593695",
  offline: "#707070",
};
const STATUS_FALLBACK_COLOR = "#707070";
const VIEW_COUNT_KEY = "quattrViewCount";
const VIEW_COUNT_STEP = 1;
const VOLUME_KEY = "quattrVolume";
const DEFAULT_VOLUME = 0.45;
const VIEW_COUNT_BASE = 0;
const PRELOADER_MIN_INCREMENT = 2;
const PRELOADER_MAX_INCREMENT = 6;
const PRELOADER_TICK_INTERVAL = 40;
const PRELOADER_FADE_DELAY = 400;

const ROBLOX_API_HOSTS = [
  {
    users: "https://users.roblox.com",
    friends: "https://friends.roblox.com",
    thumbnails: "https://thumbnails.roblox.com",
    inventory: "https://inventory.roblox.com",
    presence: "https://presence.roblox.com",
  },
  {
    users: "https://users.roproxy.com",
    friends: "https://friends.roproxy.com",
    thumbnails: "https://thumbnails.roproxy.com",
    inventory: "https://inventory.roproxy.com",
    presence: "https://presence.roproxy.com",
  },
];

const avatarEl = document.getElementById("avatar");
const displayNameEl = document.getElementById("displayName");
const handleEl = document.getElementById("handle");
const presenceEl = document.getElementById("presence");
const statusTextEl = document.getElementById("statusText");
const avatarDecorationEl = document.getElementById("avatarDecoration");
const statusDotEl = document.getElementById("statusDot");
const viewCountEl = document.getElementById("viewCount");
const viewStatEl = document.getElementById("viewStat");
const badgeListEl = document.getElementById("badgeList");
const platformIconEl = document.getElementById("platformIcon");
const platformTextEl = document.getElementById("platformText");
const preloaderEl = document.getElementById("preloader");
const preloaderFillEl = document.getElementById("preloaderFill");

const trackArtEl = document.getElementById("trackArt");
const trackTitleEl = document.getElementById("trackTitle");
const trackArtistEl = document.getElementById("trackArtist");
const elapsedEl = document.getElementById("elapsed");
const durationEl = document.getElementById("duration");
const progressFillEl = document.getElementById("progressFill");
const playPauseButton = document.getElementById("playPause");
const prevButton = document.getElementById("prevTrack");
const nextButton = document.getElementById("nextTrack");
const loopButton = document.getElementById("loopButton");
const shuffleButton = document.getElementById("shuffleButton");
const volumeControlEl = document.getElementById("volumeControl");
const offlineAudioEl = document.getElementById("offlineAudio");
const lyricsBodyEl = document.getElementById("lyricsBody");
const lyricsPanelEl = document.getElementById("lyricsPanel");
const lyricsToggleEl = document.getElementById("lyricsToggle");
const musicCardEl = document.querySelector(".music-card");

const navLinks = document.querySelectorAll(".bio-links a[data-view]");
const viewPanelsEl = document.querySelector(".view-panels");
const playlistToggleEl = document.getElementById("playlistToggle");
const playlistPopoverEl = document.getElementById("playlistPopover");
const terminalButton = document.querySelector(
  '.global-actions .icon-button[aria-label="Terminal"]'
);
const settingsButton = document.querySelector(
  '.global-actions .icon-button[aria-label="Settings"]'
);
const terminalWindow = document.getElementById("terminalWindow");
const terminalHeader = document.getElementById("terminalHeader");
const terminalCloseEl = document.getElementById("terminalClose");
const terminalOutputEl = document.getElementById("terminalOutput");
const terminalInputEl = document.getElementById("terminalInput");
const settingsWindow = document.getElementById("settingsWindow");
const settingsCloseEl = document.getElementById("settingsClose");
const settingsHeader = document.getElementById("settingsHeader");
const trailToggleEl = document.getElementById("trailToggle");
const awesomeToggleEl = document.getElementById("awesomeToggle");
const trailCanvas = document.getElementById("cursorTrail");
const trailCtx = trailCanvas ? trailCanvas.getContext("2d") : null;
const robloxSummaryHandleEl = document.getElementById("robloxSummaryHandle");
const robloxAvatarEl = document.getElementById("robloxAvatar");
const robloxProfileNameEl = document.getElementById("robloxProfileName");
const robloxProfileHandleEl = document.getElementById("robloxProfileHandle");
const robloxProfileBioEl = document.getElementById("robloxProfileBio");
const robloxOnlineStatusEl = document.getElementById("robloxOnlineStatus");
const robloxFollowersEl = document.getElementById("robloxFollowers");
const robloxFollowingEl = document.getElementById("robloxFollowing");
const robloxFriendsEl = document.getElementById("robloxFriends");
const robloxRapEl = document.getElementById("robloxRap");
const robloxProfileLinkEl = document.getElementById("robloxProfileLink");
const socialItemEls = document.querySelectorAll(".social-item");

const PROMPT_TEXT = "root/127.0.0.1:~#";
const TRAIL_CONFIG = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};
const TRAIL_SPRING_VARIANCE = 0.1;
const TRAIL_FRICTION_VARIANCE = 0.01;

const SPOTIFY_LIVE_ID = "spotify-live";
const SPOTIFY_LIVE_OPTION = {
  id: SPOTIFY_LIVE_ID,
  title: "Spotify live",
  artist: "Live presence",
  accent: "#1db954",
  source: "spotify",
};
const playlistTracks = [
  {
    id: "butterfly-crazy-town",
    title: "Butterfly",
    artist: "Crazy Town",
    art: "music/butterfly_crazy_town_art.jpg",
    accent: "#705050",
    file: "music/Butterfly%20crazy%20town.mp3",
    source: "offline",
  },
  {
    id: "gesaffelstein---lost-in-the-fire",
    title: "Lost in the Fire",
    artist: "Gesaffelstein,  The Weeknd",
    art: "music/gesaffelstein___lost_in_the_fire_art.jpg",
    accent: "#f0f0f0",
    file: "music/Gesaffelstein%20-%20Lost%20in%20the%20Fire.mp3",
    source: "offline",
  },
  {
    id: "jay-z---why-i-love-you-(album-version-edited)",
    title: "Why I Love You",
    artist: "JAY-Z,  Kanye West,  Mr Hudson",
    art: "music/jay_z___why_i_love_you_%28album_version_edited%29_art.jpg",
    accent: "#b09070",
    file: "music/JAY%20Z%20-%20Why%20I%20Love%20You%20%28Album%20Version%20Edited%29.mp3",
    source: "offline",
  },
  {
    id: "kanye-west---ghost-town",
    title: "Ghost Town",
    artist: "Kanye West,  PARTYNEXTDOOR",
    art: "music/ghost_town_album_art.jpg",
    accent: "#3e5e81",
    file: "music/Kanye%20West%20-%20Ghost%20Town.mp3",
    source: "offline",
  },
  {
    id: "kanye-west---guilt-trip",
    title: "Guilt Trip",
    artist: "Kanye West",
    art: "music/kanye_west___guilt_trip_art.jpg",
    accent: "#fb0800",
    file: "music/Kanye%20West%20-%20Guilt%20Trip.mp3",
    source: "offline",
  },
  {
    id: "metro-boomin---overdue",
    title: "Overdue",
    artist: "Metro Boomin,  Travis Scott",
    art: "music/metro_boomin___overdue_art.jpg",
    accent: "#c3581a",
    file: "music/Metro%20Boomin%20-%20Overdue.mp3",
    source: "offline",
  },
  {
    id: "missing-everything-but-the-girl",
    title: "Missing",
    artist: "Everything But The Girl",
    art: "music/missing_everything_but_the_girl_art.jpg",
    accent: "#f0f0f0",
    file: "music/Missing%20everything%20but%20the%20girl.mp3",
    source: "offline",
  },
  {
    id: "pink-floyd---have-a-cigar",
    title: "Have a Cigar",
    artist: "Pink Floyd",
    art: "music/pink_floyd___have_a_cigar_art.jpg",
    accent: "#f0f0f0",
    file: "music/Pink%20Floyd%20-%20Have%20a%20Cigar.mp3",
    source: "offline",
  },
  {
    id: "sade---kiss-of-life",
    title: "Kiss of Life",
    artist: "Sade",
    art: "music/sade___kiss_of_life_art.jpg",
    accent: "#d0d0d0",
    file: "music/Sade%20-%20Kiss%20of%20Life.mp3",
    source: "offline",
  },
  {
    id: "the-weeknd---can-t-feel-my-face",
    title: "Can't Feel My Face",
    artist: "The Weeknd",
    art: "music/the_weeknd___can_t_feel_my_face_art.jpg",
    accent: "#8a8a8a",
    file: "music/The%20Weeknd%20-%20Can%20t%20Feel%20My%20Face.mp3",
    source: "offline",
  },
  {
    id: "the-weeknd---coming-down-(2)",
    title: "Coming Down",
    artist: "The Weeknd",
    art: "music/the_weeknd___coming_down_%282%29_art.jpg",
    accent: "#8a8a8a",
    file: "music/The%20Weeknd%20-%20Coming%20Down%20%282%29.mp3",
    source: "offline",
  },
];

let trackTimer = null;
let activeTrackId = null;
let terminalInitialized = false;
let awesomeMode = false;
let trailEnabled = true;
let trailWidth = 0;
let trailHeight = 0;
let draggingTerminal = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let draggingSettings = false;
let settingsDragOffsetX = 0;
let settingsDragOffsetY = 0;
let playbackSource = "offline";
let preferSpotify = null;
let latestSpotify = null;
let spotifyTrackId = null;
let spotifyTrackKey = null;
let lyricsTrackKey = null;
let lyricsLines = [];
let lyricsCues = null;
let activeLyricsIndex = -1;
let currentVolume = DEFAULT_VOLUME;
let trailInitialized = false;
let trailRunning = false;
let trailHueOscillator = null;
let trailLines = [];
const trailPointer = { x: 0, y: 0 };
let isLooping = false;
let isShuffling = false;
let activeQueue = [];

const generateQueue = (shuffle) => {
  const indices = playlistTracks.map((_, index) => index);
  if (!shuffle) {
    return indices;
  }
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
};

const toggleLoop = () => {
  isLooping = !isLooping;
  if (loopButton) {
    loopButton.classList.toggle("is-active", isLooping);
  }
};

const toggleShuffle = () => {
  isShuffling = !isShuffling;
  if (shuffleButton) {
    shuffleButton.classList.toggle("is-active", isShuffling);
  }

  const currentIndex = playlistTracks.findIndex((track) => track.id === activeTrackId);
  activeQueue = generateQueue(isShuffling);

  if (currentIndex !== -1 && isShuffling) {
    const queuePos = activeQueue.indexOf(currentIndex);
    if (queuePos !== -1) {
      activeQueue.splice(queuePos, 1);
      activeQueue.unshift(currentIndex);
    }
  }
};

const getStatusColor = (status) =>
  STATUS_COLORS[status] || STATUS_FALLBACK_COLOR;

const setStatusDot = (status) => {
  if (!statusDotEl) {
    return;
  }
  const color = getStatusColor(status);
  statusDotEl.style.setProperty("--status-color", color);
  statusDotEl.style.backgroundColor = color;
  statusDotEl.style.boxShadow = `0 0 8px ${color}`;
};

const runPreloader = () => {
  if (!preloaderEl || !preloaderFillEl) {
    return;
  }
  let progress = 0;
  const handlePreloaderComplete = () => {
    preloaderEl.classList.add("is-fading");
    preloaderEl.addEventListener(
      "transitionend",
      () => {
        preloaderEl.classList.add("is-hidden");
      },
      { once: true }
    );
  };

  const tick = () => {
    progress = Math.min(
      progress +
        Math.random() * (PRELOADER_MAX_INCREMENT - PRELOADER_MIN_INCREMENT) +
        PRELOADER_MIN_INCREMENT,
      100
    );
    preloaderFillEl.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(handlePreloaderComplete, PRELOADER_FADE_DELAY);
    }
  };

  const timer = setInterval(tick, PRELOADER_TICK_INTERVAL);
  tick();
};

const PLATFORM_ICONS = {
  mobile: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>`,
  web: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M4 12h16M12 4a10 10 0 0 1 0 16M12 4a10 10 0 0 0 0 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>`,
  desktop: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M8 20h8M12 16v4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>`,
  offline: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M5 5l14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>`,
};

const DISCORD_BADGES = [
  { flag: 1, label: "Discord Staff", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-staff.svg" },
  { flag: 2, label: "Partnered Server Owner", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-partner.svg" },
  { flag: 4, label: "HypeSquad Events", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hype-squad-events.svg" },
  { flag: 8, label: "Discord Bug Hunter (Tier 1)", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-bug-hunter-green.svg" },
  { flag: 64, label: "HypeSquad Bravery", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hype-squad-bravery.svg" },
  { flag: 128, label: "HypeSquad Brilliance", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hype-squad-brilliance.svg" },
  { flag: 256, label: "HypeSquad Balance", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hype-squad-balance.svg" },
  { flag: 512, label: "Early Supporter", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-early-supporter.svg" },
  { flag: 16384, label: "Discord Bug Hunter (Tier 2)", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-bug-hunter-gold.svg" },
  { flag: 131072, label: "Early Verified Bot Developer", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-bot-dev.svg" },
  { flag: 262144, label: "Moderator Programs Alumni", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discord-mod.svg" },
  { flag: 524288, label: "Supports Commands", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/supports-commands.svg" },
  { flag: 4194304, label: "Active Developer", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/active-developer.svg" },
  { flag: 16777216, label: "Uses Automod", icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/automod.svg" },
];

const normalizeBadgeIconUrl = (iconUrl) => {
  if (!iconUrl) {
    return "";
  }
  return iconUrl;
};

const getPlatformInfo = (data, status) => {
  if (data?.active_on_discord_mobile) {
    return { id: "mobile", label: "Mobile" };
  }
  if (data?.active_on_discord_web) {
    return { id: "web", label: "Web" };
  }
  if (data?.active_on_discord_desktop) {
    return { id: "desktop", label: "App" };
  }
  if (status === "offline") {
    return { id: "offline", label: "Offline" };
  }
  return { id: "desktop", label: "App" };
};

const updatePlatformDisplay = (data, status) => {
  if (!platformIconEl || !platformTextEl) {
    return;
  }
  const platform = getPlatformInfo(data, status);
  platformIconEl.innerHTML = PLATFORM_ICONS[platform.id] || "";
  platformTextEl.textContent = `${platform.label} · ${status.toUpperCase()}`;
};

const getBadgeIconSources = (iconUrl) => {
  return [iconUrl];
};

const updateBadges = (user) => {
  if (!badgeListEl) {
    return;
  }
  const flags = Number(user?.public_flags ?? user?.flags ?? 0);
  badgeListEl.innerHTML = "";
  const earnedBadges = DISCORD_BADGES.filter((badge) => flags & badge.flag);

  // Hardcode 24 month Server Boost badge
  earnedBadges.push({
    label: "Server Booster (24 Months)",
    icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discord-boost-9.svg"
  });

  earnedBadges.push({
    label: "Gifting Patron",
    icon: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/gifting/patron.png"
  });

  if (!earnedBadges.length) {
    badgeListEl.style.display = "none";
    return;
  }
  badgeListEl.style.display = "flex";
  earnedBadges.forEach((badge) => {
    const img = document.createElement("img");
    const sources = getBadgeIconSources(badge.icon);
    if (!sources.length) {
      return;
    }
    let sourceIndex = 0;
    const handleLoad = () => {
      img.removeEventListener("error", handleError);
      img.removeEventListener("load", handleLoad);
    };
    const handleError = () => {
      sourceIndex += 1;
      if (sourceIndex < sources.length) {
        img.src = sources[sourceIndex];
        return;
      }
      handleLoad();
      img.remove();
    };
    img.addEventListener("error", handleError);
    img.addEventListener("load", handleLoad);
    img.src = sources[sourceIndex];
    img.alt = badge.label;
    img.title = badge.label;
    img.className = "badge-icon";
    img.loading = "eager";
    img.decoding = "async";
    badgeListEl.appendChild(img);
  });
};

const formatTime = (ms) => {
  if (!Number.isFinite(ms) || ms < 0) {
    return "0:00";
  }
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const formatCompactCount = (value) => {
  if (!Number.isFinite(value)) {
    return "0";
  }
  try {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(Math.round(value));
  } catch (error) {
    return `${Math.round(value)}`;
  }
};

const buildRobloxUrlCandidates = (service, path, query = {}) =>
  ROBLOX_API_HOSTS.map((hosts) => {
    const url = new URL(`${hosts[service]}${path}`);
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
    return url.toString();
  });

const fetchJsonFromCandidates = async (urls, options) => {
  for (const url of urls) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        continue;
      }
      return await response.json();
    } catch (_error) {
      continue;
    }
  }
  return null;
};

const updateRobloxOnlineStatus = (label, isOnline) => {
  if (!robloxOnlineStatusEl) {
    return;
  }
  robloxOnlineStatusEl.textContent = label;
  robloxOnlineStatusEl.classList.toggle("is-online", Boolean(isOnline));
  robloxOnlineStatusEl.classList.toggle("is-offline", !isOnline);
};

const updateRobloxCount = (element, value) => {
 if (Number.isNaN(value) || value === "NaN") {
    element.textContent = "NaN";
    return;
  }
  const parsedValue = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(parsedValue)) {
    return;
  }
  element.textContent = formatCompactCount(parsedValue);
};

const fetchRobloxCollectiblesRap = async () => {
  try {
    const url = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(`https://api.rolimons.com/players/v1/playerinfo/${ROBLOX_USER_ID}`)}`;
    const response = await fetch(url);
    if (!response.ok) return NaN;
    const data = await response.json();
    if (!data || !data.rap) return NaN;
    return data.rap > 0 ? data.rap : NaN;
  } catch (error) {
    console.warn("Rolimons RAP fetch failed", error);
    return NaN;
  }
};

const hslToRgb = (h, s, l) => {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hNorm = (((h % 360) + 360) % 360) / 360;
    r = hue2rgb(p, q, hNorm + 1 / 3);
    g = hue2rgb(p, q, hNorm);
    b = hue2rgb(p, q, hNorm - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

const hexToRgb = (hex) => {
  if (typeof hex !== "string") {
    return null;
  }
  const normalized = hex.replace("#", "").trim();
  if (![3, 6].includes(normalized.length)) {
    return null;
  }
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;
  const int = Number.parseInt(full, 16);
  if (Number.isNaN(int)) {
    return null;
  }
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
};

const setAccentColor = (hex) => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return;
  }
  document.documentElement.style.setProperty("--accent-rgb", rgb.join(", "));
};

const getMainColor = (imgUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        canvas.width = 64;
        canvas.height = 64;
        ctx.drawImage(img, 0, 0, 64, 64);
        const data = ctx.getImageData(0, 0, 64, 64).data;

        const colorCounts = {};

        for (let i = 0; i < data.length; i += 4) {
          const rBin = Math.floor(data[i] / 32) * 32 + 16;
          const gBin = Math.floor(data[i+1] / 32) * 32 + 16;
          const bBin = Math.floor(data[i+2] / 32) * 32 + 16;
          const rgb = `${Math.min(rBin, 255)},${Math.min(gBin, 255)},${Math.min(bBin, 255)}`;

          colorCounts[rgb] = (colorCounts[rgb] || 0) + 1;
        }

        const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);

        let selectedColor = null;
        for (const [rgbStr] of sortedColors) {
          const [r, g, b] = rgbStr.split(",").map(Number);
          // Calculate luminance to determine if the color is too dark
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luminance >= 60) {
            selectedColor = { r, g, b };
            break;
          }
        }

        if (!selectedColor) {
          resolve("#ffffff");
        } else {
          const hex = "#" + (1 << 24 | selectedColor.r << 16 | selectedColor.g << 8 | selectedColor.b).toString(16).slice(1);
          resolve(hex);
        }
      } catch (e) {
        resolve("#1db954");
      }
    };
    img.onerror = () => resolve("#1db954");
    img.src = imgUrl;
  });
};

const clearTrackTimer = () => {
  if (trackTimer) {
    clearInterval(trackTimer);
    trackTimer = null;
  }
};

const updateProgressUI = (elapsedMs, durationMs) => {
  if (!elapsedEl || !durationEl || !progressFillEl) {
    return;
  }
  const safeDuration = Math.max(durationMs || 0, 0);
  const safeElapsed = Math.min(Math.max(elapsedMs || 0, 0), safeDuration);

  const durationText = formatTime(safeDuration);
  if (durationEl.textContent !== durationText) {
    durationEl.textContent = durationText;
  }

  const elapsedText = formatTime(safeElapsed);
  if (elapsedEl.textContent !== elapsedText) {
    elapsedEl.textContent = elapsedText;
  }

  const percent = safeDuration ? (safeElapsed / safeDuration) * 100 : 0;
  progressFillEl.style.width = `${percent}%`;
};

const setTrackInfo = ({ title, artist, artUrl }) => {
  if (trackTitleEl) {
    trackTitleEl.textContent = title;
  }
  if (trackArtistEl) {
    trackArtistEl.textContent = artist;
  }
  if (trackArtEl) {
    trackArtEl.src = artUrl;
  }
};

const setPlayButtonState = (isPlaying) => {
  if (!playPauseButton) {
    return;
  }
  playPauseButton.dataset.playing = isPlaying ? "true" : "false";
};

const setSpotifyModeUI = (isSpotify) => {
  if (musicCardEl) {
    musicCardEl.classList.toggle("is-spotify", isSpotify);
  }
};
const measurePanelHeight = (panel) => {
  if (!panel) {
    return 0;
  }
  panel.classList.add("is-measuring");
  const height = panel.scrollHeight;
  panel.classList.remove("is-measuring");
  return height;
};

const setViewPanelsHeight = (panel) => {
  if (!viewPanelsEl || !panel) {
    return;
  }
  viewPanelsEl.style.height = `${measurePanelHeight(panel)}px`;
};

const updateActivePanelHeight = () => {
  const activePanel = document.querySelector(".view-panel.is-active");
  if (activePanel) {
    setViewPanelsHeight(activePanel);
  }
};

const lockLyricsHeight = () => {
  if (!lyricsBodyEl || !lyricsPanelEl) return;
  lyricsBodyEl.style.height = 'auto';
  const contentHeight = lyricsBodyEl.scrollHeight;
  const lockedHeight = Math.min(contentHeight, 120);
  lyricsBodyEl.style.height = `${lockedHeight}px`;
};

const setLyricsVisibility = (isOpen) => {
  if (!lyricsPanelEl || !lyricsToggleEl) {
    return;
  }
  const openState = Boolean(isOpen);
  lyricsPanelEl.classList.toggle("is-collapsed", !openState);
  lyricsToggleEl.setAttribute("aria-expanded", openState ? "true" : "false");
  lyricsToggleEl.setAttribute(
    "aria-label",
    openState ? "Hide live lyrics" : "Show live lyrics"
  );
  updateActivePanelHeight();
  setTimeout(() => { updateActivePanelHeight(); }, openState ? 350 : 10);
};
const setLyricsMessage = (message) => {
  if (!lyricsBodyEl) {
    return;
  }
  lyricsLines = [];
  lyricsCues = null;
  activeLyricsIndex = -1;
  lyricsBodyEl.innerHTML = "";
  const line = document.createElement("div");
  line.className = "lyrics-line";
  line.textContent = message;
  lyricsBodyEl.appendChild(line);
  lockLyricsHeight();
  updateActivePanelHeight();
};

const setLyricsLines = (lines) => {
  if (!lyricsBodyEl) {
    return;
  }
  lyricsLines = lines;
  lyricsCues = null;
  activeLyricsIndex = -1;
  lyricsBodyEl.innerHTML = "";
  if (!lines.length) {
    setLyricsMessage("Lyrics unavailable for this track.");
    return;
  }
  lines.forEach((lineText) => {
    const line = document.createElement("div");
    line.className = "lyrics-line";
    line.textContent = lineText || "…";
    lyricsBodyEl.appendChild(line);
  });
  lockLyricsHeight();
  updateActivePanelHeight();
};

const setLyricsCues = (cues) => {
  if (!lyricsBodyEl) {
    return;
  }
  lyricsCues = cues;
  lyricsLines = cues.map((cue) => cue.text || "…");
  activeLyricsIndex = -1;
  lyricsBodyEl.innerHTML = "";
  if (!lyricsLines.length) {
    setLyricsMessage("Lyrics unavailable for this track.");
    return;
  }
  lyricsLines.forEach((lineText) => {
    const line = document.createElement("div");
    line.className = "lyrics-line";
    line.textContent = lineText || "…";
    lyricsBodyEl.appendChild(line);
  });
  lockLyricsHeight();
  updateActivePanelHeight();
};

const parsePlainLyrics = (rawLyrics) =>
  rawLyrics
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const parseSyncedLyrics = (rawLyrics) => {
  if (!rawLyrics) {
    return [];
  }
  const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
  const cues = [];
  rawLyrics.split(/\r?\n/).forEach((line) => {
    const matches = [...line.matchAll(timeRegex)];
    if (!matches.length) {
      return;
    }
    const text = line.replace(timeRegex, "").trim() || "…";
    matches.forEach((match) => {
      const minutes = Number(match[1] || 0);
      const seconds = Number(match[2] || 0);
      const fraction = match[3] ? Number(match[3].padEnd(3, "0")) : 0;
      const time = minutes * 60000 + seconds * 1000 + fraction;
      cues.push({ time, text });
    });
  });
  return cues.sort((a, b) => a.time - b.time);
};

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateLyricsProgress = (elapsedMs, durationMs) => {
  if (!lyricsBodyEl || !lyricsLines.length) {
    return;
  }
  let nextIndex = 0;
  if (lyricsCues && lyricsCues.length) {
    lyricsCues.forEach((cue, index) => {
      if (elapsedMs >= cue.time) {
        nextIndex = index;
      }
    });
  } else {
    if (!Number.isFinite(durationMs)) {
      return;
    }
    const totalLines = lyricsLines.length;
    const progressRatio = durationMs
      ? Math.min(Math.max(elapsedMs / durationMs, 0), 1)
      : 0;
    nextIndex = Math.min(
      Math.floor(progressRatio * totalLines),
      totalLines - 1
    );
  }
  if (nextIndex === activeLyricsIndex) {
    return;
  }
  const previous = lyricsBodyEl.children[activeLyricsIndex];
  if (previous) {
    previous.classList.remove("is-active");
  }
  const current = lyricsBodyEl.children[nextIndex];
  if (current) {
    current.classList.add("is-active");
    const container = lyricsBodyEl;
    const currentRect = current.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const targetScrollTop = container.scrollTop + (currentRect.top - containerRect.top) - (container.clientHeight / 2) + (currentRect.height / 2);
    container.scrollTo({
      top: targetScrollTop,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }
  activeLyricsIndex = nextIndex;
};

const startSpotifyProgress = (startTime, durationMs) => {
  clearTrackTimer();
  const start = Number.isFinite(startTime) ? startTime : Date.now();
  const duration = Math.max(durationMs || 0, 0);

  const updateProgress = () => {
    const now = Date.now();
    const elapsed = Math.min(Math.max(now - start, 0), duration);
    updateProgressUI(elapsed, duration);
    updateLyricsProgress(elapsed, duration);
  };

  updateProgress();
  trackTimer = setInterval(updateProgress, 50);
};

const updateViewCount = async () => {
  if (!viewCountEl) {
    return;
  }

  let currentCount = VIEW_COUNT_BASE;

  try {
    const hasVisited = sessionStorage.getItem("quattrSessionVisited");

    let response;
    if (!hasVisited) {
      response = await fetch("https://api.counterapi.dev/v1/quattr_one/visits/up");
      sessionStorage.setItem("quattrSessionVisited", "true");
    } else {
      response = await fetch("https://api.counterapi.dev/v1/quattr_one/visits/");
    }

    if (response.ok) {
      const data = await response.json();
      currentCount = data.count || VIEW_COUNT_BASE;
    } else {
      console.warn("Failed to fetch view count from API");
    }
  } catch (error) {
    console.warn("View count API request failed", error);
  }

  const formattedCount = formatCompactCount(currentCount);
  viewCountEl.textContent = formattedCount;
  if (viewStatEl) {
    viewStatEl.textContent = formattedCount;
  }
};

const getAvatarUrl = (user) => {
  if (!user) {
    return "https://cdn.discordapp.com/embed/avatars/0.png";
  }
  if (user.avatar) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`;
  }
  const fallbackIndex = Number(user.discriminator || 0) % 5;
  return `https://cdn.discordapp.com/embed/avatars/${fallbackIndex}.png`;
};

const getCustomStatus = (activities = []) => {
  const custom = activities.find((activity) => activity.type === 4);
  if (!custom || !custom.state) {
    return STATUS_FALLBACK;
  }
  const emoji = custom.emoji?.name ? `${custom.emoji.name} ` : "";
  return `${emoji}${custom.state}`.trim();
};

const loadVolume = () => {
  try {
    const stored = Number(localStorage.getItem(VOLUME_KEY));
    if (Number.isFinite(stored)) {
      currentVolume = Math.min(Math.max(stored, 0), 1);
    }
  } catch (error) {
    console.warn("Volume read failed", error);
  }
  if (volumeControlEl) {
    volumeControlEl.value = String(Math.round(currentVolume * 100));
  }
  if (offlineAudioEl) {
    offlineAudioEl.volume = currentVolume;
  }
};

const saveVolume = () => {
  try {
    localStorage.setItem(VOLUME_KEY, String(currentVolume));
  } catch (error) {
    console.warn("Volume write failed", error);
  }
};

const updateOfflineProgress = () => {
  if (!offlineAudioEl) {
    return;
  }
  const durationMs = Number.isFinite(offlineAudioEl.duration)
    ? offlineAudioEl.duration * 1000
    : 0;
  const elapsedMs = Number.isFinite(offlineAudioEl.currentTime)
    ? offlineAudioEl.currentTime * 1000
    : 0;
  updateProgressUI(elapsedMs, durationMs);
  updateLyricsProgress(elapsedMs, durationMs);
};

const startOfflineProgress = () => {
  clearTrackTimer();
  updateOfflineProgress();
  trackTimer = setInterval(updateOfflineProgress, 50);
};

const setOfflineTrack = (track, shouldPlay = false) => {
  if (!track) {
    return;
  }
  clearTrackTimer();
  playbackSource = "offline";
  spotifyTrackId = null;
  spotifyTrackKey = null;
  activeTrackId = track.id;
  setSpotifyModeUI(false);
  setTrackInfo({
    title: track.title,
    artist: track.artist,
    artUrl: track.art,
  });
  setAccentColor(track.accent);
  if (offlineAudioEl && track.file) {
    if (!offlineAudioEl.src.endsWith(track.file)) {
      offlineAudioEl.src = track.file;
      offlineAudioEl.load();
    }
    if (shouldPlay) {
      offlineAudioEl.play().catch((error) => {
        console.warn("Offline playback failed", error);
      });
    }
  }
  const nextLyricsKey = `${track.artist} - ${track.title}`;
  if (nextLyricsKey !== lyricsTrackKey) {
    lyricsTrackKey = nextLyricsKey;
    fetchLyrics(track.artist, track.title);
  }
  updateOfflineProgress();
  if (offlineAudioEl) {
    setPlayButtonState(!offlineAudioEl.paused);
  } else {
    setPlayButtonState(false);
  }
  updatePlaylistActive();
};

const lyricsCache = {};

const fetchLyrics = async (artist, title) => {
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

const initializeOfflineAudio = () => {
  if (!offlineAudioEl) {
    return;
  }
  offlineAudioEl.volume = currentVolume;
  offlineAudioEl.addEventListener("loadedmetadata", updateOfflineProgress);
  offlineAudioEl.addEventListener("timeupdate", updateOfflineProgress);
  offlineAudioEl.addEventListener("play", () => {
    if (playbackSource === "offline") {
      setPlayButtonState(true);
      startOfflineProgress();
    }
  });
  offlineAudioEl.addEventListener("pause", () => {
    if (playbackSource === "offline") {
      setPlayButtonState(false);
      clearTrackTimer();
    }
  });
  offlineAudioEl.addEventListener("ended", () => {
    if (playbackSource === "offline") {
      stepOfflineTrack(1, true);
    }
  });
};

const setSpotifyPlaceholder = () => {
  clearTrackTimer();
  playbackSource = "spotify";
  spotifyTrackId = null;
  spotifyTrackKey = null;
  activeTrackId = SPOTIFY_LIVE_ID;
  setSpotifyModeUI(true);
  if (offlineAudioEl && !offlineAudioEl.paused) {
    offlineAudioEl.pause();
  }
  setTrackInfo({
    title: "Spotify live",
    artist: "No active track",
    artUrl: trackArtEl?.src || playlistTracks[0]?.art || "",
  });
  setAccentColor("#1db954");
  setPlayButtonState(false);
  updateProgressUI(0, 0);
  setLyricsMessage("Spotify is not active right now.");
  updatePlaylistActive();
};

const applySpotifyTrack = (spotify) => {
  if (!spotify || !spotify.song) {
    return;
  }
  playbackSource = "spotify";
  activeTrackId = SPOTIFY_LIVE_ID;
  setSpotifyModeUI(true);
  const start = spotify.timestamps?.start || 0;
  const end = spotify.timestamps?.end || 0;
  const duration = Math.max(end - start, 0);
  const nextKey = `${spotify.artist} - ${spotify.song}`;

  setTrackInfo({
    title: spotify.song,
    artist: spotify.artist,
    artUrl: spotify.album_art_url,
  });
  setAccentColor("#1db954");
  if (spotify.album_art_url) {
    getMainColor(spotify.album_art_url).then((color) => {
      // Only set if we haven't switched tracks while fetching
      if (spotifyTrackKey === nextKey) {
        setAccentColor(color);
      }
    });
  }
  spotifyTrackId = spotify.track_id || null;
  spotifyTrackKey = nextKey;
  if (offlineAudioEl && !offlineAudioEl.paused) {
    offlineAudioEl.pause();
  }
  setPlayButtonState(true);
  startSpotifyProgress(start, duration);

  if (nextKey !== lyricsTrackKey) {
    lyricsTrackKey = nextKey;
    fetchLyrics(spotify.artist, spotify.song);
  }
  updatePlaylistActive();
};

const updateSpotify = (spotify) => {
  const hadSpotify = !!latestSpotify;
  latestSpotify = spotify && spotify.song ? spotify : null;

  if (hadSpotify !== !!latestSpotify && playlistPopoverEl) {
    const spotifyBtn = playlistPopoverEl.querySelector(`[data-track-id="${SPOTIFY_LIVE_ID}"]`);
    if (spotifyBtn) {
      spotifyBtn.style.display = latestSpotify ? "" : "none";
    }
  }

  if (!spotify || !spotify.song) {
    if (preferSpotify === true) {
      setSpotifyPlaceholder();
    } else if (playbackSource === "spotify") {
      setOfflineTrack(playlistTracks[0]);
    }
    return;
  }

  if (preferSpotify === false) {
    return;
  }

  applySpotifyTrack(spotify);
};

const updatePresence = (data) => {
  const user = data.discord_user;
  const displayName = user?.global_name || user?.username || "quattr";
  displayNameEl.textContent = displayName;
  handleEl.textContent = `@${(user?.username || "quattr").toLowerCase()}`;
  avatarEl.src = getAvatarUrl(user);
  
  if (user?.avatar_decoration_data?.asset && avatarDecorationEl) {
    avatarDecorationEl.src = `https://cdn.discordapp.com/avatar-decoration-presets/${user.avatar_decoration_data.asset}.png`;
    avatarDecorationEl.style.display = "block";
  } else if (avatarDecorationEl) {
    avatarDecorationEl.style.display = "none";
  }

  updateBadges(user);

  const status = data.discord_status || "offline";
  presenceEl.textContent = status.toUpperCase();
  setStatusDot(status);
  updatePlatformDisplay(data, status);

  const customStatus = getCustomStatus(data.activities);
  statusTextEl.textContent = `> ${customStatus}`;

  updateSpotify(data.spotify);
};

const VIEW_EXIT_DURATION = 400;

const setActiveView = (viewName) => {
  if (!viewName) {
    return;
  }
  const current = document.querySelector(".view-panel.is-active");
  const next = document.querySelector(`.view-panel[data-view="${viewName}"]`);
  if (!next || current === next) {
    return;
  }

  const nextHeight = measurePanelHeight(next);
  if (viewPanelsEl && nextHeight) {
    viewPanelsEl.style.height = `${nextHeight}px`;
  }

  if (current) {
    current.classList.remove("is-active");
    current.classList.add("is-exiting");
    const handleExit = (event) => {
      if (event.target !== current) {
        return;
      }
      current.classList.remove("is-exiting");
      current.removeEventListener("animationend", handleExit);
    };
    current.addEventListener("animationend", handleExit);
    window.setTimeout(() => {
      current.classList.remove("is-exiting");
      current.removeEventListener("animationend", handleExit);
    }, VIEW_EXIT_DURATION + 50);
  }

  next.classList.add("is-active");
  setViewPanelsHeight(next);

  navLinks.forEach((link) => {
    const isActive = link.dataset.view === viewName;
    link.classList.toggle("active", isActive);
  });
};

const updatePlaylistActive = () => {
  if (!playlistPopoverEl) {
    return;
  }
  const items = playlistPopoverEl.querySelectorAll(".playlist-item");
  items.forEach((item) => {
    item.classList.toggle("active", item.dataset.trackId === activeTrackId);
  });
};

const applyManualTrack = (track) => {
  if (!track) {
    return;
  }
  if (track.id === SPOTIFY_LIVE_ID) {
    preferSpotify = true;
    if (latestSpotify?.song) {
      applySpotifyTrack(latestSpotify);
    } else {
      setSpotifyPlaceholder();
    }
    return;
  }
  preferSpotify = false;
  setOfflineTrack(track, true);
};

const renderPlaylist = () => {
  if (!playlistPopoverEl) {
    return;
  }
  playlistPopoverEl.innerHTML = "";
  const menuTracks = [SPOTIFY_LIVE_OPTION, ...playlistTracks];
  menuTracks.forEach((track) => {
    const button = document.createElement("button");
    button.type = "button";
    if (track.id === SPOTIFY_LIVE_ID && !latestSpotify) {
      button.style.display = "none";
    }
    button.className = "playlist-item";
    button.dataset.trackId = track.id;
    button.innerHTML = `
      <span class="playlist-main">
        <span class="playlist-name">${track.title}</span>
        <span class="playlist-artist">${track.artist}</span>
      </span>
      <span class="playlist-accent" style="background: ${track.accent}"></span>
    `;
    button.addEventListener("click", () => {
      applyManualTrack(track);
      closePlaylistPopover();
    });
    playlistPopoverEl.appendChild(button);
  });
  updatePlaylistActive();
};

const getActiveTrackIndex = () =>
  playlistTracks.findIndex((track) => track.id === activeTrackId);

const openExternalPlayer = () => {
  if (playbackSource === "spotify" && spotifyTrackId) {
    window.open(`https://open.spotify.com/track/${spotifyTrackId}`, "_blank");
    return;
  }
  if (playbackSource === "spotify") {
    const query = spotifyTrackKey ? encodeURIComponent(spotifyTrackKey) : "";
    if (query) {
      window.open(`https://open.spotify.com/search/${query}`, "_blank");
      return;
    }
  }
  const activeTrack = playlistTracks.find((track) => track.id === activeTrackId);
  if (activeTrack?.file) {
    window.open(activeTrack.file, "_blank");
  }
};

const toggleOfflinePlayback = () => {
  if (!offlineAudioEl) {
    return;
  }
  if (offlineAudioEl.paused) {
    offlineAudioEl
      .play()
      .then(() => {
        setPlayButtonState(true);
      })
      .catch((error) => {
        setPlayButtonState(false);
        console.warn("Offline playback failed", error);
      });
  } else {
    offlineAudioEl.pause();
    setPlayButtonState(false);
  }
};

const stepOfflineTrack = (direction, isAutoAdvance = false) => {
  if (!playlistTracks.length) {
    return;
  }

  if (!activeQueue.length) {
    activeQueue = generateQueue(isShuffling);
  }

  const currentIndex = getActiveTrackIndex();
  const queueIndex = activeQueue.indexOf(currentIndex);
  const safeQueueIndex = queueIndex >= 0 ? queueIndex : 0;

  let nextQueueIndex = safeQueueIndex + direction;

  if (isAutoAdvance && nextQueueIndex >= activeQueue.length) {
    if (!isLooping) {
      setPlayButtonState(false);
      return;
    }
  }

  nextQueueIndex = (nextQueueIndex + activeQueue.length) % activeQueue.length;
  const nextTrackIndex = activeQueue[nextQueueIndex];
  const nextTrack = playlistTracks[nextTrackIndex];

  if (nextTrack.id === activeTrackId && offlineAudioEl) {
    offlineAudioEl.currentTime = 0;
    if (isAutoAdvance || direction !== 0) {
      offlineAudioEl.play().catch((error) => {
        console.warn("Offline playback failed", error);
      });
    }
    return;
  }
  setOfflineTrack(nextTrack, true);
};

const openPlaylistPopover = () => {
  if (!playlistPopoverEl || !playlistToggleEl) {
    return;
  }
  playlistPopoverEl.classList.add("is-open");
  playlistPopoverEl.setAttribute("aria-hidden", "false");
  playlistToggleEl.setAttribute("aria-expanded", "true");
};

const closePlaylistPopover = () => {
  if (!playlistPopoverEl || !playlistToggleEl) {
    return;
  }
  playlistPopoverEl.classList.remove("is-open");
  playlistPopoverEl.setAttribute("aria-hidden", "true");
  playlistToggleEl.setAttribute("aria-expanded", "false");
};

const togglePlaylistPopover = () => {
  if (!playlistPopoverEl) {
    return;
  }
  if (playlistPopoverEl.classList.contains("is-open")) {
    closePlaylistPopover();
  } else {
    openPlaylistPopover();
  }
};

const setTrailEnabled = (enabled) => {
  trailEnabled = Boolean(enabled);
  if (trailCanvas) {
    trailCanvas.style.opacity = trailEnabled ? "1" : "0";
  }
  if (trailEnabled) {
    initTrail();
  }
  trailRunning = trailEnabled;
  if (!trailEnabled && trailCtx) {
    trailCtx.clearRect(0, 0, trailWidth, trailHeight);
  }
  if (trailToggleEl) {
    trailToggleEl.checked = trailEnabled;
  }
};

const toggleTrail = () => {
  setTrailEnabled(!trailEnabled);
  return trailEnabled;
};

const appendTerminalLine = (text, className) => {
  if (!terminalOutputEl) {
    return;
  }
  const line = document.createElement("div");
  line.className = `terminal-line${className ? ` ${className}` : ""}`;
  line.textContent = text;
  terminalOutputEl.appendChild(line);
  terminalOutputEl.scrollTop = terminalOutputEl.scrollHeight;
};

const setAwesomeMode = (enabled) => {
  awesomeMode = enabled;
  if (awesomeToggleEl) {
    awesomeToggleEl.checked = awesomeMode;
  }
  if (!awesomeMode) {
    if (playbackSource === "spotify") {
      setAccentColor("#1db954");
    } else {
      const track = playlistTracks.find((t) => t.id === activeTrackId);
      if (track) {
        setAccentColor(track.accent);
      }
    }
  }
};

const handleTerminalCommand = (rawInput) => {
  const input = rawInput.trim();
  if (!input) {
    return;
  }

  if (input === "clear") {
    if (terminalOutputEl) {
      terminalOutputEl.innerHTML = "";
    }
    return;
  }

  appendTerminalLine(`${PROMPT_TEXT} ${input}`, "command");

  const [command, ...args] = input.split(" ");

  switch (command.toLowerCase()) {
    case "help":
      appendTerminalLine(
        'commands: ping, clear, close, trail, echo [text], awesome'
      );
      break;
    case "ping":
      appendTerminalLine("pong");
      break;
    case "close":
      closeTerminal();
      break;
    case "trail": {
      const enabled = toggleTrail();
      appendTerminalLine(
        `cursor trail ${enabled ? "enabled" : "disabled"}.`
      );
      break;
    }
    case "echo":
      appendTerminalLine(args.join(" ") || " ");
      break;
    case "awesome":
      setAwesomeMode(!awesomeMode);
      appendTerminalLine(`awesome mode ${awesomeMode ? "enabled" : "disabled"}.`);
      break;
    default:
      appendTerminalLine(`command not found: ${command}`);
      break;
  }
};

const openTerminal = () => {
  if (!terminalWindow) {
    return;
  }
  terminalWindow.classList.add("is-open");
  terminalWindow.setAttribute("aria-hidden", "false");
  if (!terminalInitialized) {
    appendTerminalLine(
      'welcome to the terminal type "help" for available commands.'
    );
    terminalInitialized = true;
  }
  if (terminalInputEl) {
    terminalInputEl.focus();
  }
};

const closeTerminal = () => {
  if (!terminalWindow) {
    return;
  }
  terminalWindow.classList.remove("is-open");
  terminalWindow.setAttribute("aria-hidden", "true");
};

const openSettings = () => {
  if (!settingsWindow) {
    return;
  }
  settingsWindow.classList.add("is-open");
  settingsWindow.setAttribute("aria-hidden", "false");
  if (trailToggleEl) {
    trailToggleEl.checked = trailEnabled;
  }
  if (awesomeToggleEl) {
    awesomeToggleEl.checked = awesomeMode;
  }
};

const closeSettings = () => {
  if (!settingsWindow) {
    return;
  }
  settingsWindow.classList.remove("is-open");
  settingsWindow.setAttribute("aria-hidden", "true");
};

const loadPresence = async () => {
  try {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${LANYARD_ID}`
    );
    if (!response.ok) {
      throw new Error("Unable to reach Lanyard");
    }
    const payload = await response.json();
    if (!payload?.success || !payload.data) {
      throw new Error("No Lanyard data");
    }
    updatePresence(payload.data);
  } catch (error) {
    console.warn("Lanyard fetch failed", error);
    statusTextEl.textContent = `> ${STATUS_FALLBACK}`;
    if (presenceEl) {
      presenceEl.textContent = "OFFLINE";
    }
    setStatusDot("offline");
    updatePlatformDisplay(null, "offline");
    updateBadges(null);
  }
};

let lanyardWs = null;
let lanyardHeartbeatTimer = null;
let lanyardReconnectTimer = null;
let isLanyardConnected = false;

const initLanyardWebSocket = () => {
  if (lanyardWs) {
    try {
      lanyardWs.close();
    } catch (e) {
      // Ignore close errors
    }
  }

  lanyardWs = new WebSocket("wss://api.lanyard.rest/socket");

  lanyardWs.onopen = () => {
    isLanyardConnected = true;
    if (lanyardReconnectTimer) {
      clearTimeout(lanyardReconnectTimer);
      lanyardReconnectTimer = null;
    }
  };

  lanyardWs.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data);
      if (msg.op === 1) { // Hello
        const heartbeatInterval = msg.d.heartbeat_interval;
        if (lanyardHeartbeatTimer) {
          clearInterval(lanyardHeartbeatTimer);
        }
        lanyardHeartbeatTimer = setInterval(() => {
          if (lanyardWs && lanyardWs.readyState === WebSocket.OPEN) {
            lanyardWs.send(JSON.stringify({ op: 3 }));
          }
        }, heartbeatInterval);

        // Subscribe to user
        lanyardWs.send(JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: LANYARD_ID
          }
        }));
      } else if (msg.op === 0) { // Event
        if (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE") {
          if (msg.t === "INIT_STATE") {
            // INIT_STATE when using subscribe_to_id instead of subscribe_to_ids
            // still might wrap the user object in a user_id key if the API behaves that way,
            // or return it directly. Let's handle both.
            let data = msg.d;
            if (msg.d && msg.d[LANYARD_ID]) {
                data = msg.d[LANYARD_ID];
            }
            if (data && data.discord_user) {
              updatePresence(data);
            } else {
              console.log("WebSocket INIT_STATE missing discord_user:", msg);
            }
          } else {
            if (msg.d && msg.d.discord_user) {
              updatePresence(msg.d);
            } else {
              console.log("WebSocket PRESENCE_UPDATE missing discord_user:", msg);
            }
          }
        }
      }
    } catch (error) {
      console.warn("Error processing Lanyard WebSocket message:", error);
    }
  };

  lanyardWs.onclose = () => {
    isLanyardConnected = false;
    if (lanyardHeartbeatTimer) {
      clearInterval(lanyardHeartbeatTimer);
      lanyardHeartbeatTimer = null;
    }
    // Try reconnecting after 5 seconds
    if (!lanyardReconnectTimer) {
      lanyardReconnectTimer = setTimeout(() => {
        initLanyardWebSocket();
      }, 5000);
    }
  };

  lanyardWs.onerror = () => {
    // onclose will handle reconnection
    if (!isLanyardConnected) {
      // If we errored out before connecting, fallback to REST
      loadPresence();
    }
  };
};

const loadRobloxProfile = async () => {
  const userPath = `/v1/users/${ROBLOX_USER_ID}`;
  const countPathBase = `/v1/users/${ROBLOX_USER_ID}`;

  try {
    const [
      userPayload,
      avatarPayload,
      followersPayload,
      followingPayload,
      friendsPayload,
      presencePayload,
    ] = await Promise.all([
      fetchJsonFromCandidates(buildRobloxUrlCandidates("users", userPath)),
      fetchJsonFromCandidates(
        buildRobloxUrlCandidates("thumbnails", "/v1/users/avatar-headshot", {
          userIds: ROBLOX_USER_ID,
          size: "150x150",
          format: "Png",
          isCircular: true,
        })
      ),
      fetchJsonFromCandidates(
        buildRobloxUrlCandidates("friends", `${countPathBase}/followers/count`)
      ),
      fetchJsonFromCandidates(
        buildRobloxUrlCandidates("friends", `${countPathBase}/followings/count`)
      ),
      fetchJsonFromCandidates(
        buildRobloxUrlCandidates("friends", `${countPathBase}/friends/count`)
      ),
      fetchJsonFromCandidates(
        buildRobloxUrlCandidates("presence", "/v1/presence/users"),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userIds: [ROBLOX_USER_ID] }),
        }
      ),
    ]);

    if (userPayload) {
      const username = userPayload.name || ROBLOX_USERNAME_FALLBACK;
      const display = userPayload.displayName || username;
      if (robloxSummaryHandleEl) {
        robloxSummaryHandleEl.textContent = username;
      }
      if (robloxProfileNameEl) {
        robloxProfileNameEl.textContent = display;
      }
      if (robloxProfileHandleEl) {
        robloxProfileHandleEl.textContent = `@${username}`;
      }
      if (robloxProfileBioEl && typeof userPayload.description === 'string') {
        robloxProfileBioEl.innerText = userPayload.description;
        updateActivePanelHeight();
      }
      if (robloxProfileLinkEl) {
        robloxProfileLinkEl.href = `https://www.roblox.com/users/${ROBLOX_USER_ID}/profile`;
      }
    }

    const avatarUrl = avatarPayload?.data?.[0]?.imageUrl;
    if (robloxAvatarEl && avatarUrl) {
      robloxAvatarEl.src = avatarUrl;
    }

    updateRobloxCount(robloxFollowersEl, followersPayload?.count);
    updateRobloxCount(robloxFollowingEl, followingPayload?.count);
    updateRobloxCount(robloxFriendsEl, friendsPayload?.count);

    const presence = Array.isArray(presencePayload?.userPresences)
      ? presencePayload.userPresences.find(
          (item) => Number(item?.userId) === ROBLOX_USER_ID
        )
      : null;
    const presenceType = Number(
      presence?.userPresenceType || ROBLOX_PRESENCE_OFFLINE
    );
    if (presenceType === ROBLOX_PRESENCE_IN_GAME) {
      updateRobloxOnlineStatus("In-Game", true);
    } else if (presenceType === ROBLOX_PRESENCE_IN_STUDIO) {
      updateRobloxOnlineStatus("In Studio", true);
    } else if (presenceType === ROBLOX_PRESENCE_ONLINE) {
      updateRobloxOnlineStatus("Online", true);
    } else {
      updateRobloxOnlineStatus("Offline", false);
    }

    const rapValue = await fetchRobloxCollectiblesRap();
    updateRobloxCount(robloxRapEl, rapValue);
  } catch (error) {
    console.warn("Roblox profile fetch failed", error);
    updateRobloxOnlineStatus("Offline", false);
  }
};

runPreloader();
loadVolume();
initializeOfflineAudio();
setOfflineTrack(playlistTracks[0]);
setStatusDot("offline");
initLanyardWebSocket(); // Initial load and real-time updates via WebSocket
loadRobloxProfile();
updateViewCount();
setInterval(loadRobloxProfile, ROBLOX_REFRESH_INTERVAL);

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
const stars = [];
const shootingStars = [];
let width = 0;
let height = 0;
let scrollOffset = 0;
const parallax = { x: 0, y: 0 };
const targetParallax = { x: 0, y: 0 };

const TrailOscillator = function (options = {}) {
  this.phase = options.phase || 0;
  this.offset = options.offset || 0;
  this.frequency = options.frequency || 0.001;
  this.amplitude = options.amplitude || 1;
  this.value = 0;
};

TrailOscillator.prototype.update = function () {
  this.phase += this.frequency;
  this.value = this.offset + Math.sin(this.phase) * this.amplitude;
  return this.value;
};

const TrailNode = function () {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
};

const TrailLine = function (options = {}) {
  this.spring =
    (options.spring ?? 0.4) +
    TRAIL_SPRING_VARIANCE * (Math.random() - 0.5);
  this.friction =
    (options.friction ?? TRAIL_CONFIG.friction) +
    TRAIL_FRICTION_VARIANCE * (Math.random() - 0.5);
  this.nodes = [];
  for (let i = 0; i < TRAIL_CONFIG.size; i += 1) {
    const node = new TrailNode();
    node.x = trailPointer.x;
    node.y = trailPointer.y;
    this.nodes.push(node);
  }
};

TrailLine.prototype.update = function () {
  let spring = this.spring;
  let node = this.nodes[0];
  node.vx += (trailPointer.x - node.x) * spring;
  node.vy += (trailPointer.y - node.y) * spring;

  for (let i = 0; i < this.nodes.length; i += 1) {
    node = this.nodes[i];
    if (i > 0) {
      const prev = this.nodes[i - 1];
      node.vx += (prev.x - node.x) * spring;
      node.vy += (prev.y - node.y) * spring;
      node.vx += prev.vx * TRAIL_CONFIG.dampening;
      node.vy += prev.vy * TRAIL_CONFIG.dampening;
    }
    node.vx *= this.friction;
    node.vy *= this.friction;
    node.x += node.vx;
    node.y += node.vy;
    spring *= TRAIL_CONFIG.tension;
  }
};

TrailLine.prototype.draw = function () {
  if (!trailCtx) {
    return;
  }
  let x = this.nodes[0].x;
  let y = this.nodes[0].y;
  trailCtx.beginPath();
  trailCtx.moveTo(x, y);
  for (let i = 1; i < this.nodes.length - 2; i += 1) {
    const node = this.nodes[i];
    const next = this.nodes[i + 1];
    x = 0.5 * (node.x + next.x);
    y = 0.5 * (node.y + next.y);
    trailCtx.quadraticCurveTo(node.x, node.y, x, y);
  }
  const penultimate = this.nodes[this.nodes.length - 2];
  const last = this.nodes[this.nodes.length - 1];
  trailCtx.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
  trailCtx.stroke();
  trailCtx.closePath();
};

const createTrailLines = () => {
  trailLines = [];
  for (let i = 0; i < TRAIL_CONFIG.trails; i += 1) {
    trailLines.push(
      new TrailLine({
        spring: 0.4 + (i / TRAIL_CONFIG.trails) * 0.025,
        friction: TRAIL_CONFIG.friction,
      })
    );
  }
};

const updateTrailPointer = (event) => {
  const isTouch = Boolean(event.touches);
  const point = isTouch ? event.touches[0] : event;
  if (!point) {
    return;
  }
  if (isTouch) {
    trailPointer.x = point.pageX ?? trailPointer.x;
    trailPointer.y = point.pageY ?? trailPointer.y;
  } else {
    trailPointer.x = point.clientX ?? trailPointer.x;
    trailPointer.y = point.clientY ?? trailPointer.y;
  }
  if (!trailLines.length) {
    createTrailLines();
  }
};

const resizeTrailCanvas = () => {
  if (!trailCanvas || !trailCtx) {
    return;
  }
  trailWidth = Math.max(window.innerWidth - 20, 0);
  trailHeight = window.innerHeight;
  const ratio = window.devicePixelRatio || 1;
  trailCanvas.width = trailWidth * ratio;
  trailCanvas.height = trailHeight * ratio;
  trailCanvas.style.width = `${trailWidth}px`;
  trailCanvas.style.height = `${trailHeight}px`;
  trailCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
};

const initTrail = () => {
  if (!trailCanvas || !trailCtx || trailInitialized) {
    return;
  }
  trailInitialized = true;
  resizeTrailCanvas();
  trailPointer.x = window.innerWidth / 2;
  trailPointer.y = window.innerHeight / 2;
  trailHueOscillator = new TrailOscillator({
    phase: Math.random() * Math.PI * 2,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  createTrailLines();
  document.addEventListener("mousemove", updateTrailPointer);
  document.addEventListener("touchmove", updateTrailPointer, { passive: true });
  document.addEventListener("touchstart", updateTrailPointer, {
    passive: true,
  });
  window.addEventListener("orientationchange", resizeTrailCanvas);
  trailRunning = trailEnabled;
};

const createStars = () => {
  stars.length = 0;
  const count = Math.floor((width * height) / 8000);
  for (let i = 0; i < count; i += 1) {
    const twinkleRate =
      Math.random() * (STAR_TWINKLE_MAX - STAR_TWINKLE_MIN) +
      STAR_TWINKLE_MIN;
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      alpha: Math.random() * 0.6 + 0.2,
      twinkle: twinkleRate * (Math.random() > 0.5 ? 1 : -1),
      drift: (Math.random() - 0.5) * 0.05,
    });
  }
};

const resizeCanvas = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  createStars();
  resizeTrailCanvas();
};

const updateParallax = () => {
  parallax.x += (targetParallax.x - parallax.x) * 0.05;
  parallax.y += (targetParallax.y - parallax.y) * 0.05;
};

const renderStars = () => {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);
  updateParallax();
  const offsetX = parallax.x;
  const offsetY = parallax.y + scrollOffset;

  stars.forEach((star) => {
    star.y += star.speed;
    star.x += star.drift;
    star.alpha += star.twinkle;

    if (star.y > height) star.y = 0;
    if (star.y < 0) star.y = height;
    if (star.x > width) star.x = 0;
    if (star.x < 0) star.x = width;
    if (star.alpha > 1 || star.alpha < 0.2) star.twinkle *= -1;

    const drawX = (star.x + offsetX + width) % width;
    const drawY = (star.y + offsetY + height) % height;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  if (Math.random() < 0.005) {
    shootingStars.push({
      x: Math.random() * width,
      y: 0,
      length: Math.random() * 80 + 20,
      speed: Math.random() * 10 + 5,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1,
    });
  }

  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];
    star.x -= star.speed * Math.cos(star.angle);
    star.y += star.speed * Math.sin(star.angle);
    star.opacity -= 0.01;

    if (star.opacity <= 0 || star.x < 0 || star.y > height) {
      shootingStars.splice(i, 1);
      continue;
    }

    const startX = (star.x + offsetX + width) % width;
    const startY = (star.y + offsetY + height) % height;
    const endX = startX + star.length * Math.cos(star.angle);
    const endY = startY - star.length * Math.sin(star.angle);

    ctx.beginPath();
    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  requestAnimationFrame(renderStars);
};

const renderTrail = () => {
  if (!trailCtx) {
    return;
  }
  trailCtx.globalCompositeOperation = "source-over";
  trailCtx.clearRect(0, 0, trailWidth, trailHeight);

  const hue = trailHueOscillator ? trailHueOscillator.update() : 200;
  if (awesomeMode) {
    const [r, g, b] = hslToRgb(hue, 1, 0.5);
    document.documentElement.style.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
  }

  if (trailRunning && trailLines.length) {
    trailCtx.globalCompositeOperation = "lighter";
    if (awesomeMode) {
      trailCtx.strokeStyle = `hsla(${Math.round(hue)}, 50%, 50%, 0.2)`;
    } else {
      trailCtx.strokeStyle = `rgba(255, 255, 255, 0.2)`;
    }
    trailCtx.lineWidth = 1;
    trailCtx.shadowBlur = 0;
    trailCtx.shadowColor = "transparent";
    trailLines.forEach((line) => {
      line.update();
      line.draw();
    });
  }
  trailCtx.globalCompositeOperation = "source-over";
  requestAnimationFrame(renderTrail);
};

window.addEventListener("resize", resizeCanvas);
window.addEventListener("resize", updateActivePanelHeight);
window.addEventListener("mousemove", (event) => {
  const xRatio = event.clientX / width - 0.5;
  const yRatio = event.clientY / height - 0.5;
  targetParallax.x = xRatio * 5;
  targetParallax.y = yRatio * 5;
});
window.addEventListener("scroll", () => {
  scrollOffset = window.scrollY * 0.02;
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.view);
  });
});

if (playlistToggleEl) {
  playlistToggleEl.addEventListener("click", (event) => {
    event.stopPropagation();
    togglePlaylistPopover();
  });
}

if (playlistPopoverEl) {
  document.addEventListener("click", (event) => {
    if (
      !playlistPopoverEl.contains(event.target) &&
      event.target !== playlistToggleEl
    ) {
      closePlaylistPopover();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePlaylistPopover();
    closeSettings();
  }
});

if (loopButton) {
  loopButton.addEventListener("click", toggleLoop);
}

if (shuffleButton) {
  shuffleButton.addEventListener("click", toggleShuffle);
}

if (playPauseButton) {
  playPauseButton.addEventListener("click", () => {
    if (playbackSource === "spotify") {
      openExternalPlayer();
      return;
    }
    toggleOfflinePlayback();
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    if (playbackSource === "spotify") {
      openExternalPlayer();
      return;
    }
    stepOfflineTrack(-1);
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (playbackSource === "spotify") {
      openExternalPlayer();
      return;
    }
    stepOfflineTrack(1);
  });
}

if (lyricsToggleEl) {
  lyricsToggleEl.addEventListener("click", () => {
    if (!lyricsPanelEl) {
      return;
    }
    const isCurrentlyOpen = !lyricsPanelEl.classList.contains("is-collapsed");
    setLyricsVisibility(!isCurrentlyOpen);
  });
}

if (volumeControlEl) {
  volumeControlEl.addEventListener("input", (event) => {
    const value = Number(event.target.value);
    if (!Number.isFinite(value)) {
      return;
    }
    currentVolume = Math.min(Math.max(value / 100, 0), 1);
    if (offlineAudioEl) {
      offlineAudioEl.volume = currentVolume;
    }
    saveVolume();
  });
}

if (terminalButton) {
  terminalButton.addEventListener("click", openTerminal);
}

if (settingsButton) {
  settingsButton.addEventListener("click", openSettings);
}

if (terminalCloseEl) {
  terminalCloseEl.addEventListener("click", closeTerminal);
}

if (settingsCloseEl) {
  settingsCloseEl.addEventListener("click", closeSettings);
}

if (trailToggleEl) {
  trailToggleEl.addEventListener("change", (event) => {
    setTrailEnabled(event.target.checked);
  });
}

if (awesomeToggleEl) {
  awesomeToggleEl.addEventListener("change", (event) => {
    setAwesomeMode(event.target.checked);
  });
}

if (terminalInputEl) {
  terminalInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = terminalInputEl.value;
      terminalInputEl.value = "";
      handleTerminalCommand(value);
    }
  });
}

if (terminalHeader && terminalWindow) {
  terminalHeader.addEventListener("mousedown", (event) => {
    draggingTerminal = true;
    const rect = terminalWindow.getBoundingClientRect();
    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;
    terminalWindow.style.left = `${rect.left}px`;
    terminalWindow.style.top = `${rect.top}px`;
    terminalWindow.style.right = "auto";
    terminalWindow.style.bottom = "auto";
  });
}

if (settingsHeader && settingsWindow) {
  settingsHeader.addEventListener("mousedown", (event) => {
    draggingSettings = true;
    const rect = settingsWindow.getBoundingClientRect();
    settingsDragOffsetX = event.clientX - rect.left;
    settingsDragOffsetY = event.clientY - rect.top;
    settingsWindow.style.left = `${rect.left}px`;
    settingsWindow.style.top = `${rect.top}px`;
    settingsWindow.style.right = "auto";
    settingsWindow.style.bottom = "auto";
  });
}

window.addEventListener("mousemove", (event) => {
  if (!draggingTerminal || !terminalWindow) {
    if (draggingSettings && settingsWindow) {
      settingsWindow.style.left = `${event.clientX - settingsDragOffsetX}px`;
      settingsWindow.style.top = `${event.clientY - settingsDragOffsetY}px`;
    }
    return;
  }
  terminalWindow.style.left = `${event.clientX - dragOffsetX}px`;
  terminalWindow.style.top = `${event.clientY - dragOffsetY}px`;
});

window.addEventListener("mouseup", () => {
  draggingTerminal = false;
  draggingSettings = false;
});

if (socialItemEls) {
  socialItemEls.forEach(el => {
    el.addEventListener("toggle", () => {
      setTimeout(() => { updateActivePanelHeight(); }, 10);
    });
  });
}

renderPlaylist();
const isMobile = window.matchMedia("(max-width: 640px)").matches || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
setTrailEnabled(!isMobile);
setLyricsVisibility(true);
updateActivePanelHeight();

window.quattrTrail = {
  enable: () => setTrailEnabled(true),
  disable: () => setTrailEnabled(false),
  toggle: () => toggleTrail(),
  isEnabled: () => trailEnabled,
};

resizeCanvas();
renderStars();
renderTrail();
