// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "a40a44e61b1d4ebdac071fcf42f5d5e9";
const redirectUri = "http://localhost:3000";
const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "user-read-private",
  "playlist-modify-private",
  "playlist-read-private",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;