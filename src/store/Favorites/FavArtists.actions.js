export function addArtist(artist) {
    return {
        type: 'addArtist',
        payload: artist

    }
}

export function removeArtist(artist) {
    return {
        type: 'removeArtist',
        payload: artist

    }
}