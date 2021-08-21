import { createStore, combineReducers } from 'redux';
import FavTrackReducer from './Favorites/FavTrack.reducer';
import FavAlbumReducer from './Favorites/FavAlbum.reducer';
import FavArtistsReducer from './Favorites/FavArtists.reducer';
import ItemsReducer from './Items/Items.reducer';
import NextReducer from './Next/Next.reducer';

const rootReducer = combineReducers({
    favTracks: FavTrackReducer,
    favAlbums: FavAlbumReducer,
    favArtists: FavArtistsReducer,
    items: ItemsReducer,
    next: NextReducer 
})

const store = createStore(rootReducer);

export default store;