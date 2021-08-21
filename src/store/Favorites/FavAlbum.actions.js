export function addFavAlbum(album) {
    return {
        type: 'addFavAlbum',
        payload: album

    }
}

export function removeFavAlbum(album) {
    return {
        type: 'removeFavAlbum',
        payload: album

    }
}