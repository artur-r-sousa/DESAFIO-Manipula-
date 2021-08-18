import axios from 'axios';

export function getCharts() {
    axios({
        method: 'GET',
        url: 'https://musicsioproxy.herokuapp.com/api.deezer.com/chart'
    })
    .then(response => {
        return response.data.tracks.data      
    })
    .catch(err => {
        console.log('error', err);
    });
}

export function queryValue(value){
    let query = value.replaceAll(' ', '-');
    axios({
        method: 'GET',
        url: 'https://api.deezer.com/search?q='+query
    })
    .then(response => {
        return response.data.tracks.data
    })
    .catch(err => {
        console.log('error', err);
    });
}