import { useEffect, useState } from 'react';
import '../components/search/search.css'
import Tracksearchresult from '../components/search/TrackSearchResult';

const Search = ({spotify, setPlayingSong}) => {

  const [searchKey, setSearchKey] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {

    console.log(searchKey);

    spotify.searchTracks(searchKey).then((res) => {
      setSongs(res.tracks.items);
    })

    console.log(songs);
  }, [searchKey]);


  return (
    <div id="search" className="flex flex-col max-w-[calc(100vw-3rem)]">
      <form className="h-12 border-b-4 border-black mx-6 mb-4 flex px-2" type="search" onInput={(e)=>setSearchKey(e.target.value)}>
        <input type="search" placeholder="Search songs/artists" className="w-full border-none outline-none bg-transparent"/>
      </form>
      <div className="px-4 flex flex-col">
        {songs.map((song)=>
          <Tracksearchresult key={song.id} songId={song.id} name={song.name} image={song.album.images[0].url} artist={song.artists[0].name} song={song.preview_url}/>
        )}
      </div>
    </div>
  );
};

export default Search;
