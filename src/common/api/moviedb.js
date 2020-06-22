import axios from 'axios'
import { API_KEY } from '@/constants'

const API_URL = 'https://api.themoviedb.org'
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

class MovieDB {
  // eslint에서 이상한 오류 내서 eslint-disable 붙힘.
  /* eslint-disable */
  getMovieGenreList (language) {
    return axios.get(`${ API_URL }/3/genre/movie/list?api_key=${ API_KEY }&language=${ language }`)
  }

  getMovieTopRated(language, page) {
    return axios.get(`${API_URL}/3/movie/top_rated?api_key=${API_KEY}&language=${ language }&page=${ page }`)
  }

  getMovieDetail(language, movieID) {
    return axios.get(`${ API_URL }/movie/${ movieID }?api_key=${ API_KEY}&language=${ language }`)
  }
}
export const movieDB = new MovieDB()
