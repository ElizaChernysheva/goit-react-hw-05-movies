import axios from 'axios';

// const API_KEY = '8fd009ebb96e5f67bc9aff26848b4b67';
// const BASE_URL = 'https://api.themoviedb.org/'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '8fd009ebb96e5f67bc9aff26848b4b67'
  }
});

export async function getTrendingMovies(){
 const { data } = await instance.get(`trending/movie/day`)
 return data.results;
}

export async function getMovieDetails(id){
  const { data } = await instance.get(`/movie/${id}`)
  return data;
}

export async function searchMovies(query){
  const { data } = await instance.get(`/search/movie?query=${query}`)
  return data.results;
}


export async function getMovieCredits(id){
  const { data } = await instance.get(`/movie/${id}/credits`)
  return data.cast;
}

export async function getMovieReviews(id){
  const { data } = await instance.get(`/movie/${id}/reviews`)
  return data.results;
}
