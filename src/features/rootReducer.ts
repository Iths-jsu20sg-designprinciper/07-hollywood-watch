import { combineReducers } from 'redux'
// importera varje reducer
import { reducer as searchReducer } from './search'
import { reducer as moviesReducer } from './movies'

export const rootReducer = combineReducers({
	searchString: searchReducer,
	movies: moviesReducer
})

/* Appens state:
{
	searchString: string,
	movies: Movie[]
}
*/