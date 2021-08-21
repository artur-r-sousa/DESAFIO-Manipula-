export default function (state = [], action) {
    switch(action.type) {
        case 'addAlbum':
            const album = action.payload;
            //check if album already exists in the state
            const found = state.some(value => album.id === value.id);
            let newState = [];
            if(!found) {
                newState = [...state, album];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removeAlbum':
            const filterAlbum = action.payload
            const albumRemoved = state.filter(value => value.id !== filterAlbum.id)
            return albumRemoved;

        default:
            return state;
    }
}