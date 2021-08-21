import React from "react";
import { Link } from 'react-router-dom';
import FavTracks from "../components/FavTracks";
import FavAlbums from "../components/FavAlbums";


function Favorites() {
    return(
        <div>
            <Link to="/" style={{textDecoration: 'none', color: 'white', fontWeight: 400, marginLeft: 15}}> Inicio </Link> 
            <div>
                <FavTracks></FavTracks>
                <FavAlbums></FavAlbums>
            </div>
            
        </div>
    )
}

export default Favorites;