import axios from 'axios';
import Constants from '../utils/Constants';

const movies = type => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${type}?api_key=${Constants.API_KEY}`
  );
};

const moviesWithParams = type => {
    return axios.get(
        `${Constants.REQUEST_URL}/movie/now_playing?api_key=${Constants.API_KEY}${type}`
    );
};

const tvShows = type => {
    return axios.get(
        `${Constants.REQUEST_URL}/tv/${type}?api_key=${Constants.API_KEY}`
    );
};

export default { movies, tvShows, moviesWithParams };
