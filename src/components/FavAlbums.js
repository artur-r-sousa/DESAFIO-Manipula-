import React from 'react';
import { useSelector } from 'react-redux';

function FavAlbums() {   
    const favAlbums = useSelector((state) => state.favAlbums)

    return <>
        <div>
            <p>{ favAlbums.length > 0 ? favAlbums[0].id : 'no favorites yet'}</p>
        </div>
    </>
}

export default FavAlbums;