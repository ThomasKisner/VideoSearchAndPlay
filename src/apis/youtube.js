import axios from 'axios';

const KEY = 'AIzaSyDxu04KMiv5bP4upvkcr_UVyLYbNYmKsUM';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
}
})