export function addFavAlbum(album) {
    return {
        type: 'addAlbum',
        payload: album

    }
}

export function removeFavAlbum(album) {
    return {
        type: 'removeAlbum',
        payload: album

    }
}