import axios from 'axios';

const KEY = 'AIzaSyA8pb-Zlgrc7GgCnRA5DOjSwOkrx3z5-Fc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});