import React from 'react';
import Player from './Player';
import { useDispatch } from 'react-redux';
import { addTrack } from '../store/Favorites/FavTracks.actions';


export default function TrackList(props) {
    const dispatch = useDispatch();
    const track = props.track
    const listItems = track.map((track) => 
      <li>{track.artist.name} - {track.title}
          <div>
            <img src={track.album.cover_medium} alt="cover"></img>
          </div>
          <p>Duração: {Math.round(track.duration / 60)}:{Math.round(track.duration % 60) < 10 ? '0'+Math.round(track.duration % 60) : Math.round(track.duration % 60)}</p>


          <Player url={track.preview}/>
          <img src={'https://preview.pixlr.com/images/800wm/100/1/1001389323.jpg'} alt="favorite" 
            onClick={()=>{
              dispatch(addTrack(track));
            }} 
            style={{width: 50, height: 50}}></img>
          <br></br>
      </li>
      
    );
    return (
      <ul>{listItems}</ul>
    );

}