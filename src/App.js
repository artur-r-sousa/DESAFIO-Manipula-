import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Track from './components/Track';
import FavTracks from './components/FavTracks';

function App() {
  const [ tracks, setTracks ] = useState([]);

  useEffect(()=>{
    getCharts()
  }, [])

  function getCharts() {
    axios({
        method: 'GET',
        url: 'https://musicsioproxy.herokuapp.com/api.deezer.com/chart'
    })
    .then(response => {
        setTracks(response.data.tracks.data);
        
    })
    .catch(err => {
        console.log('error', err);
    });
}

function queryValue(search){
    let query = search.toString().replaceAll(' ', '-');
    axios({
        method: 'GET',
        url: 'https://musicsioproxy.herokuapp.com/api.deezer.com/search?q='+query
    })
    .then(response => {
        setTracks(response.data.data)
    })
    .catch(err => {
        console.log('error', err);
    });
    

}

  return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>Procurar: </label>
            <input 
              name="search" 
              placeholder="Procure uma musica, album, ou artista"
              onChange={(value) => {
                queryValue(value.target.value);
              }}/>
          </form>
          <p> Lista de Musicas </p>
        </header>

        <div>
          <p>Top 10 Musicas do momento</p>
          
          {typeof tracks !== 'undefined' ? <Track track={tracks}/> : 
            <div> 
              <p>Loading</p>
              {getCharts()}
            </div>}
        </div>
        <FavTracks></FavTracks>
      </div>
  );
}

export default App;
