export function addNext(next) {
    return {
        type: 'addNext',
        payload: next

    }
}

export function clearNext() {
    return {
        type: 'clearNext',
    }
}
