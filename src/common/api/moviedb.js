import { get } from '@/common/api/common/base'
import { API_KEY } from '@/constants'

/* eslint-disable */
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const getMovieGenreList = (language) => get(`/3/genre/movie/list?api_key=${API_KEY}&language=${ language }`)
export const getMovieTopRated = (language, page) => get(`/3/movie/top_rated?api_key=${API_KEY}&language=${language}&page=${page}`)
export const getMovieDetail = (language, movieID) => get(`/movie/${movieID}?api_key=${API_KEY}&language=${language}`)
export const getMoviePopular = (language, page) => get(`/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`)
