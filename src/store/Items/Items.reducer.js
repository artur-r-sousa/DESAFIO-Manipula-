export default function (state = [], action) {
    switch(action.type) {
        case 'addItem':
            const item = action.payload;
            //check if item already exists in the state
            const found = state.some(value => item.id === value.id);
            let newState = [];
            if(!found) {
                newState = [...state, item];
                return newState;
            }
            else {
                return state;
            }
            
        case 'removeItem':
            const filterItem = action.payload
            const itemRemoved = state.filter(value => value.id !== filterItem.id)
            return itemRemoved;

        default:
            return state;
    }
}