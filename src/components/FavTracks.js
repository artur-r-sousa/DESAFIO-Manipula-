import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';
import { useDispatch } from 'react-redux';
import { removeTrack } from '../store/Favorites/FavTracks.actions';
import { StyleImg, StyleLi, StyleLink, StyleSubTitle, StyleTitle, StyleCard, FavoriteHeart } from '../style';

function FavTracks() {   
    const favTracks = useSelector((state) => state.favTracks)
    const dispatch = useDispatch();
    const listItems = favTracks.map((track) => 
        
        <StyleLi title="listItem"> 
          <StyleImg src={track.album.cover_big} alt="cover"/>
          <StyleCard>
            <StyleTitle> {track.artist.name}</StyleTitle>
            <StyleSubTitle>{track.title}</StyleSubTitle>
            <StyleSubTitle> Album : {track.album.title}</StyleSubTitle>
            <StyleSubTitle>Duração: {Math.round(track.duration / 60)}:{Math.round(track.duration % 60) < 10 ? '0'+Math.round(track.duration % 60) : Math.round(track.duration % 60)}</StyleSubTitle>
            <StyleLink href={track.link}>Ouça no Deezer!</StyleLink>
            <Player url={track.preview}/>
          </StyleCard>

          <FavoriteHeart
            onClick={()=>{
                window.alert(track.title + ' removido dos favoritos')
                dispatch(removeTrack(track));
            }} 
            style={{width: 50, height: 50}}> ♥ </FavoriteHeart>
      </StyleLi>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default FavTracks;