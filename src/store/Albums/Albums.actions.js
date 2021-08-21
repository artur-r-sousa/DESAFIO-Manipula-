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