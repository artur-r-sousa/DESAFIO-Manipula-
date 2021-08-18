import { createStore, combineReducers } from 'redux';
import FavTrackReducer from './Favorites/FavTrack.reducer';

const rootReducer = combineReducers({
    favTracks: FavTrackReducer
})

const store = createStore(rootReducer);

export default store;