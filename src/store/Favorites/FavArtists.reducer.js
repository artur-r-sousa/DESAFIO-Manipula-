export default function (state = [], action) {
    switch(action.type) {
        case 'addArtist':
            const artist = action.payload;
            //check if artist already exists in the favorites
            const found = state.some(value => artist.id === value.id);
            let newState = [];
            if(!found) {
                newState = [...state, artist];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removeArtist':
            const filterArtist = action.payload
            const artistRemoved = state.filter(value => value.id !== filterArtist.id)
            return artistRemoved;

        default:
            return state;
    }
}