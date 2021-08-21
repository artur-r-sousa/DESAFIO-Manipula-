import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavAlbum } from '../store/Favorites/FavAlbum.actions';
import { StyleImg, StyleLi, StyleLink, StyleSubTitle, StyleTitle, StyleCard } from '../style';

function FavAlbums() {   
    const favAlbums = useSelector((state) => state.favAlbums)
    const dispatch = useDispatch();
    const listItems = favAlbums.map((album) => 
        <StyleLi title="listAlbum"> 
            <StyleImg src={album.cover_big} alt="cover"/>
            <StyleCard>
            <StyleTitle> {album.artist.name}</StyleTitle>
            <StyleSubTitle>{album.title}</StyleSubTitle>
            <img src={'https://preview.pixlr.com/images/800wm/100/1/1001389323.jpg'} alt="favorite" 
                onClick={()=>{
                window.alert(album.title + ' removido dos favoritos');
                dispatch(removeFavAlbum(album));
            }} 
            style={{width: 50, height: 50}}></img>
            </StyleCard>
        </StyleLi>
    );

    return (
        <ul>{listItems}</ul>
    )
}

export default FavAlbums;