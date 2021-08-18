import React from 'react';
import { useSelector } from 'react-redux';

function FavTracks() {   
    const favTracks = useSelector((state) => state.favTracks)

    return <>
        <div>
            <p>{ favTracks.length > 0 ? favTracks[0].id : 'no favorites yet'}</p>
        </div>
    </>
}

export default FavTracks;