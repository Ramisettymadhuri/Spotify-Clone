const BASE_AUTH_URL = "https://accounts.spotify.com";
const BASE_API = "https://api.spotify.com/v1";

const ACCESS_TOKEN = "access_token";
const EXPIRES_IN = "expires_in";
const TOKEN_TYPE = "token_type";
const REFRESH_TOKEN = "refresh_token";

const END_POINTS = {
  AUTH: "authorize",
  TOKEN: "api/token",
  FEATURED_PLAYLIST: "browse/featured-playlists?limit=10",
  PARTY_PLAYLIST: "browse/categories/0JQ5DAudkNjCgYMM0TZXDw/playlists?limit=10",
  COUNTRY_PLAYLIST: "browse/categories/country/playlists?limit=10",
  PLAYLIST: "playlists",
  USER_PROFILE: "me",
};

const SECTION = {
  DASHBOARD: "dashboard",
  PLAYLIST: "playlist",
};

function logout() {
  localStorage.clear();
  window.location.href = "/login/index.html";
}

function getItemFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export {
  BASE_API,
  BASE_AUTH_URL,
  END_POINTS,
  ACCESS_TOKEN,
  EXPIRES_IN,
  REFRESH_TOKEN,
  TOKEN_TYPE,
  SECTION,
  logout,
  saveItemToLocalStorage,
  getItemFromLocalStorage,
};
