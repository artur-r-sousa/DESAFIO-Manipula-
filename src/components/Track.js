import React from 'react';
import Player from './Player';
import { useDispatch } from 'react-redux';
import { addTrack } from '../store/Favorites/FavTracks.actions';
import { StyleImg, StyleLi, StyleLink, StyleSubTitle, StyleTitle, StyleCard, FavoriteHeart } from '../style';

export default function TrackList(props) {
    const dispatch = useDispatch();
    const track = props.track;
    const listItems = track.map((track) => 
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
              dispatch(addTrack(track));
            }} 
            > ♥ </FavoriteHeart>
      </StyleLi>      
    );
    return (
      <ul>{listItems}</ul>
    );

}