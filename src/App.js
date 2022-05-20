import tracks from "./audiotracks.js";
import Walkthrough1 from './components/walkthrough/Walkthrough1';
import Walkthrough2 from './components/walkthrough/Walkthrough2';
import Walkthrough3 from './components/walkthrough/Walkthrough3';
import Allsongs from './Pages/AllSongs';
import Trends from './Pages/Trends';
import Events from './Pages/Events';
import Form from "./components/form/Form";
import Category from "./components/category/Category";
import Search from "./Pages/Search";
import PlayList from "./components/playlist/PlayList";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./customHooks/api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Audioplayerpage from './Pages/Audioplayerpage';
import AllArtist from "./components/all-artist/AllArtist";
import Navbar from "./components/nav/navbar";
import Header from "./components/header/header";

const spotify = new SpotifyWebApi();
function App() {
  const [playingSong, setPlayingSong] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.history.pushState({}, null, "/");

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
    }
  }, []);


  function handleSetSong() { 
    // setPlayingSong();
    console.log('setsong');
  }

  // console.log(token);

  return (
    <div className="App max-h-[812px] max-w-[375px] min-h-[812px] min-w-[375px] self-center bg-white overflow-hidden">
      {token ? <Header /> : null}
      <div id="page" className="h-[calc(100vh-(68px+3.5rem))] mt-14 overflow-auto">
        <Routes>
          {token ?
          <>
          <Route path="/" element={<Walkthrough1 />}/>
          <Route path="/search" element={<Search spotify={spotify} setPlayingSong={handleSetSong}/>} />
          <Route path="/walkthrough-1" element={<Walkthrough1 />} />
          <Route path="/walkthrough-2" element={<Walkthrough2 />} />
          <Route path="/walkthrough-3" element={<Walkthrough3 />} />
          <Route path="/events" element={<Events />} />
          <Route path="/category" element={<Category />} />
          <Route path="/allsongs" element={<Allsongs />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/allartists" element={<AllArtist />} />
          <Route path="/audioplayer" element={<Audioplayerpage tracks={tracks} />} />

          </>
          
          :
          <Route path="/" element={<Form/>}/>
          
          }
        </Routes>
      </div>
      {token ? <Navbar playingSong={playingSong} /> : null}
    </div>
  );
}

export default App;
