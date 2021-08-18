import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Track from './components/Track';
import FavTracks from './components/FavTracks';

function App() {
  const [ tracks, setTracks ] = useState([]);
  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'https://musicsioproxy.herokuapp.com/api.deezer.com/chart'
  })
    .then(response => {
      console.log(response.data.tracks.data)
      setTracks(response.data.tracks.data);
    })
    .catch(err => {
      console.log('error', err);
    });
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>Procurar: </label>
            <input></input>
          </form>
          <p> Lista de Musicas </p>
        </header>

        <div>
          <p>Top 10 Musicas do momento</p>
          {tracks.length > 0? <Track track={tracks}/> : 
            <div> 
              <p>Loading</p>
            </div>}
        </div>
        <FavTracks></FavTracks>
      </div>
  );
}

export default App;
