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

export function addAlbum(album) {
    return {
        type: 'addAlbum',
        payload: album

    }
}

export function removeAlbum(album) {
    return {
        type: 'removeAlbum',
        payload: album

    }
}

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