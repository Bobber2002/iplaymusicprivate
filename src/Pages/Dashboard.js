const Dashboard = () => {
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
        />
      </form>
      <div className="flex-grow my-2 overflow-y-auto">
          {/* {searchResults.map(track => (
              <TrackSearchResult track={track} key={track.uri} />
          ))} */}
      </div>
    </div>
  );
};

export default Dashboard;
