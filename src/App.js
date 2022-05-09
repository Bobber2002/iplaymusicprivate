import {useEffect, useState} from 'react';
import axios from 'axios';

const CLIENT_ID = "c928f26754d24f92aa2742e5f55daedb"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

function App() {
  
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [song, setSong] = useState("")  

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
  
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }
  
    setToken(token)
    
    console.log(token);
  }, [])
  
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        params: {
            q: searchKey,
            type: "track"
        }
    })
    console.log(data.tracks.items);
    setArtists(data.tracks.items)
  }
  const logData = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    console.log(data);
    // setArtists(data)
  }

  // const logData =()=>{
  //   console.log(artists);
  
  // }

  const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {/* {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}   */}
            {artist.name}
            <button className='border-2' onClick={()=>{setSong(artist.preview_url); console.log("Previewing "+artist.name);}}>Preview</button>
            <audio controls>
              <source src={artist.preview_url}/>
            </audio><audio controls>
              <source src={song}/>
            </audio>
        </div>
    ))
}
  return (
    <div className="App">
      {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
      
      <form onSubmit={searchArtists}>
    <input className='border-2' type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form>
  <button style={{width: "60px", height: "40px" }} onClick={logData}/>
{renderArtists()}
    </div>
  );
}

export default App;
