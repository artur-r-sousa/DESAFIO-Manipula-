import React from "react";
import { Link } from 'react-router-dom';
import FavTracks from "../components/FavTracks";
import FavAlbums from "../components/FavAlbums";
import { useSelector } from "react-redux";
import { MainView, NoFavorite , FavoritesDiv } from '../style';



function Favorites() {

    const favTracks = useSelector((state) => state.favTracks)
    const favAlbums = useSelector((state) => state.favAlbums)

    return(

            <FavoritesDiv>
                <Link to="/" style={{textDecoration: 'none', color: 'white', fontWeight: 400, marginLeft: 15}}> Inicio </Link> 
                    {favTracks.length === 0 && favAlbums.length === 0 ? 
                        <NoFavorite>Nenhum favorito adicionado ainda. Volte e comece a adicionar! </NoFavorite> 
                        :
                        <MainView>
                            <FavTracks></FavTracks>
                            <FavAlbums></FavAlbums>
                        </MainView>
                    }          
            </FavoritesDiv>
    )
}

export default Favorites;