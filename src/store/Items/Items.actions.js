export function addItem(item) {
    return {
        type: 'addItem',
        payload: item

    }
}

export function removeItem(item) {
    return {
        type: 'removeItem',
        payload: item

    }
}