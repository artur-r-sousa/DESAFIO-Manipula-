import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';
import { useDispatch } from 'react-redux';
import { removeTrack } from '../store/Favorites/FavTracks.actions';
import { StyleImg, StyleLi, StyleLink, StyleSubTitle, StyleTitle, StyleCard } from '../style';

function FavTracks() {   
    const favTracks = useSelector((state) => state.favTracks)
    console.log(favTracks)
    const dispatch = useDispatch();
    const listItems = favTracks.map((track) => 
        
        <StyleLi title="listItem"> 
          <StyleImg src={track.album.cover_big} alt="cover"/>
          <StyleCard>
            <StyleTitle> {track.artist.name}</StyleTitle>
            <StyleSubTitle>{track.title}</StyleSubTitle>
            <StyleSubTitle> Album : {track.album.title}</StyleSubTitle>
            <div>
              
            </div>
            <StyleSubTitle>Duração: {Math.round(track.duration / 60)}:{Math.round(track.duration % 60) < 10 ? '0'+Math.round(track.duration % 60) : Math.round(track.duration % 60)}</StyleSubTitle>
            <StyleLink href={track.link}>Ouça no Deezer!</StyleLink>


            <Player url={track.preview}/>
          </StyleCard>

          <img src={'https://preview.pixlr.com/images/800wm/100/1/1001389323.jpg'} alt="favorite" 
            onClick={()=>{
                window.alert(track.title + ' removido dos favoritos')
                dispatch(removeTrack(track));
            }} 
            style={{width: 50, height: 50}}></img>
          
          <br></br>
      </StyleLi>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default FavTracks;