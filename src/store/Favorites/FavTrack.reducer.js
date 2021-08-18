export default function (state = [], action) {
    switch(action.type) {
        case 'addTrack':
            const track = action.payload;
            //check if track already exists in the favorites
            const found = state.some(value => track.id === value.id);
            let newState = [];
            if(!found) {
                newState = [...state, track];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removeTrack':
            const filterTrack = action.payload
            const trackRemoved = state.filter(value => value.id !== filterTrack.id)
            return trackRemoved;

        default:
            return state;
    }
}