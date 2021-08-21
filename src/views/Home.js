import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/Items/Items.actions';
import { addAlbum, removeAlbum } from '../store/Albums/Albums.actions';
import Track from '../components/Track';
import UIInfiniteScroll from '../components/InfiniteScroll';
import { addNext, clearNext } from '../store/Next/Next.actions';
import { MainView, StyleSearch, MainDiv, Items, StyledAvatarImg, StyledHeader, TabView, StyledMainSideBar, StyledItems, Divisor } from '../style';
import Albums from '../components/Albums';
import { Link } from 'react-router-dom';



function Home() {

  const [ loadingData, setLoadingData ] = useState(false);
  const items = useSelector((state) => state.items);
  const next = useSelector((state) => state.next);
  const albums = useSelector((state) => state.albums)
  const dispatch = useDispatch();

  useEffect(()=>{
    getCharts()
  }, [])

  function clearItems() {
    setLoadingData(false); 
    for(let item of items) {
      dispatch(removeItem(item))
    }
    for(let album of albums){
      dispatch(removeAlbum(album))
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
        for(let album of response.data.albums.data){
          dispatch(addAlbum(album))
        }
    })
    .catch(err => {
        console.log('error', err);
    });
}

  function queryValue(search){
    let query = typeof search !== 'undefined' ? search.toString().replaceAll(' ', '-') : next;
    clearItems();
    axios({
        method: 'GET',
        url: typeof search !== 'undefined' ? 'https://musicsioproxy.herokuapp.com/api.deezer.com/search?q='+query : next
    })
    .then(response => {     
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
    <MainDiv className="App">
      <StyledHeader className="App-header">
        <StyledAvatarImg src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"}/>
        <form>
          <StyleSearch 
            name="search" 
            placeholder="Procure uma musica, album, ou artista"
            onChange={(value) => {
              value.target.value === '' ? getCharts() : setTimeout(()=>{queryValue(value.target.value)}, 1000);
            }}/>
        </form>
      </StyledHeader>

      <Items>  
        <StyledMainSideBar>
          <StyledItems>
            <Link to="/favoritos" style={{textDecoration: 'none', color: 'white', fontWeight: 400, marginLeft: 15}}> Favoritos </Link> 
          </StyledItems>
          <Divisor></Divisor>
        </StyledMainSideBar>    
        {typeof items !== 'undefined' ? 
          <MainView>
            <TabView>
              <Track track={items}/> 
            </TabView>
            { loadingData ? <p></p> :
            <TabView>
              <Albums album={albums}/>
            </TabView>}
          </MainView>
          : 
          <div> 
            <p>Loading</p>
          </div>}
      </Items>
      { loadingData ? 
        <div>        
          <UIInfiniteScroll fetchMore={queryValue}/>      
        </div>
        : <div />}
    
    </MainDiv>
  );
}

export default Home;