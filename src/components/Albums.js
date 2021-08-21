import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavAlbum } from '../store/Favorites/FavAlbum.actions';
import { StyleImg, StyleLi, StyleTitle, StyleCard, StyleSubTitle, FavoriteHeart } from '../style';

export default function Albums(props) {
    const dispatch = useDispatch();
    const albums = props.album;
    const listAlbums = albums.map((album) => 
      <StyleLi title="listAlbum"> 
          <StyleImg src={album.cover_big} alt="cover"/>
          <StyleCard>
            <StyleTitle> {album.artist.name}</StyleTitle>
            <StyleSubTitle>{album.title}</StyleSubTitle>
            <FavoriteHeart 
              onClick={()=>{
                dispatch(addFavAlbum(album));
              }} 
            > ♥ </FavoriteHeart>
          </StyleCard>   
          <br></br>
      </StyleLi>
      
    );
    return (
      <ul>{listAlbums}</ul>
    );
}