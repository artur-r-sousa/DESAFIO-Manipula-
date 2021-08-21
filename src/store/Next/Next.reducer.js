export default function (state = [], action) {
    switch(action.type) {
        case 'addNext':
            const next = action.payload;
            let newState = [];
            newState = [next];
            return newState;

        default:
            return state;

        case 'clearNext':
            const clearState = [];
            return clearState;
    }
}