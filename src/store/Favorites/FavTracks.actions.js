export function addTrack(track) {
    return {
        type: 'addTrack',
        payload: track
    }
}

export function removeTrack(track) {
    return {
        type: 'removeTrack',
        payload: track

    }
}

