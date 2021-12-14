import { createReducer, createAction } from '@reduxjs/toolkit'
import { Movie } from '../models/Movie'
import { defaultMovies } from '../data/defaultMovies'

const addMovie = createAction<Movie>('add new movie')

const actions = {
	addMovie
}


const initialState = defaultMovies

const reducer = createReducer(initialState, {
	[addMovie.toString()]: (state, action) => [ ...state, action.payload ]
})


export { actions, reducer }
