import Walkthrough1 from "./components/walkthrough/Walkthrough1";
import Walkthrough2 from "./components/walkthrough/Walkthrough2";
import Walkthrough3 from "./components/walkthrough/Walkthrough3";
import Allsongs from "./Pages/AllSongs";
import Events from "./Pages/Events";
import Form from "./components/form/Form";
import Category from "./components/category/Category";
import Dashboard from "./Pages/Dashboard";
import PlayList from "./components/playlist/PlayList";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./customHooks/api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import AudioPlayer from "./components/AudioPlayer";
import AllArtist from "./components/all-artist/AllArtist";


const spotify = new SpotifyWebApi();
function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();            
    window.history.pushState({},null ,'/')  


    const _token = hash.access_token;

    if (_token){
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.searchTracks('Never').then((user)=>{
        console.log(user);
      })
    }
  }, []);
  
  console.log(token);
  
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={token ? <Dashboard spotify={spotify}/> : <Form />} />
        <Route path="/walkthrough-1" element={<Walkthrough1 />} />
        <Route path="/walkthrough-2" element={<Walkthrough2 />} />
        <Route path="/walkthrough-3" element={<Walkthrough3 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<Category />} />
        <Route path="/allsongs" element={<Allsongs />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/allartists" element={<AllArtist />} />
        <Route path="/audioplayer" element={<AudioPlayer />} />  
      </Routes>
    </div>
  );
}

export default App;
