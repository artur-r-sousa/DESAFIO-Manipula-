export default function (state = [], action) {
    switch(action.type) {
        case 'addFavAlbum':
            const album = action.payload;
            //check if album already exists in the favorites
            const found = state.some(value => album.id === value.id);
            let newState = [];
            if(!found) {
                newState = [...state, album];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removeFavAlbum':
            const filterAlbum = action.payload
            const albumRemoved = state.filter(value => value.id !== filterAlbum.id)
            return albumRemoved;

        default:
            return state;
    }
}