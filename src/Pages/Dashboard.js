import { useState, useEffect } from "react";
import useAuth from "../customHooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "../components/dashboard/TrackSearchResult";

const spotifyApi = new SpotifyWebApi({
  clientId: "a40a44e61b1d4ebdac071fcf42f5d5e9",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            }
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div className="flex flex-col h-screen">
      <form
        type="search"
        className="h-16 w-[95%] mx-2 mt-2 border-2 rounded-sm"
      >
        <input
          placeholder="Search song/artist"
          type="text"
          className="h-full w-full px-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="flex-grow my-2 overflow-y-auto">
          {searchResults.map(track => (
              <TrackSearchResult track={track} key={track.uri} />
          ))}
      </div>
      <div>bottom</div>
    </div>
  );
};

export default Dashboard;
