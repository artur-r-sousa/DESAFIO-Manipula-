import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './store/Items/Items.actions'
import Track from './components/Track';
import FavTracks from './components/FavTracks'; 
import UIInfiniteScroll from './components/InfiniteScroll';
import { addNext, clearNext } from './store/Next/Next.actions'
import { MainView, StyleSearch } from './style'


function App() {

  const [ loadingData, setLoadingData ] = useState(false);
  const items = useSelector((state) => state.items);
  const next = useSelector((state) => state.next);
  const dispatch = useDispatch();

  useEffect(()=>{
    getCharts()
  }, [])

  function clearItems() {
    setLoadingData(false); 
    for(let item of items) {
      dispatch(removeItem(item))
    }
  }

  function getCharts() {
    dispatch(clearNext());
    clearItems();
    axios({
        method: 'GET',
        url: 'https://musicsioproxy.herokuapp.com/api.deezer.com/chart'
    })
    .then(response => {
        for(let item of response.data.tracks.data){
          dispatch(addItem(item))
        }
    })
    .catch(err => {
        console.log('error', err);
    });
}

  function queryValue(search){
    let query = typeof search !== 'undefined' ? search.toString().replaceAll(' ', '-') : next;
    console.log('search: ' + query)
    console.log('qv next'+next)
    clearItems();
    axios({
        method: 'GET',
        url: typeof search !== 'undefined' ? 'https://musicsioproxy.herokuapp.com/api.deezer.com/search?q='+query : next
    })
    .then(response => {     
      console.log(response)
      clearItems();
      for(let item of response.data.data){
        dispatch(addItem(item));
      }    
      dispatch(addNext('https://musicsioproxy.herokuapp.com'+response.data.next.toString().substring(6)));
      setLoadingData(true);
    })
    .catch(err => {
        console.log('error', err);
    });
}
  return (
      <div className="App">
        <header className="App-header">
          <form>
            <StyleSearch 
              name="search" 
              placeholder="Procure uma musica, album, ou artista"
              onChange={(value) => {
                value.target.value == '' ? getCharts() : queryValue(value.target.value);
              }}/>
          </form>
          <p> Lista de Musicas </p>
        </header>
        <div>
          <p>Top 10 Musicas do momento</p>         
          {typeof items !== 'undefined' ? 
            <MainView>
              <Track track={items}/> 
            </MainView>
             : 
            <div> 
              <p>Loading</p>
            </div>}
        </div>
        <FavTracks></FavTracks>
        { loadingData ? 
          <div>        
            <UIInfiniteScroll fetchMore={queryValue}/>      
          </div>
          : <div />}
       
      </div>
  );
}

export default App;
