import React from 'react';

const Tracksearchresult = ({track}) => {
    return (
        <div className="flex m-2 items-center">
            <img src={track.albumUrl} className="h-16 w-16" alt="" />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-black/50">{track.artist}</div>
            </div>
            
        </div>
    );
}

export default Tracksearchresult;
