import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavAlbum } from '../store/Favorites/FavAlbum.actions';
import { StyleImg, StyleLi, StyleTitle, StyleCard, StyleSubTitle } from '../style';

export default function Albums(props) {
    const dispatch = useDispatch();
    const albums = props.album;
    const listAlbums = albums.map((album) => 
      <StyleLi title="listAlbum"> 
          <StyleImg src={album.cover_big} alt="cover"/>
          <StyleCard>
            <StyleTitle> {album.artist.name}</StyleTitle>
            <StyleSubTitle>{album.title}</StyleSubTitle>
            <img src={'https://preview.pixlr.com/images/800wm/100/1/1001389323.jpg'} alt="favorite" 
              onClick={()=>{
                dispatch(addFavAlbum(album));
              }} 
            style={{width: 50, height: 50}}></img>
          </StyleCard>   
          <br></br>
      </StyleLi>
      
    );
    return (
      <ul>{listAlbums}</ul>
    );
}