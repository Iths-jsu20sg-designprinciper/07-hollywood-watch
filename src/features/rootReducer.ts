import { combineReducers } from 'redux'
// importera varje reducer
import { reducer as searchReducer } from './search'

export const rootReducer = combineReducers({
	searchString: searchReducer
})

/* Appens state:
{
	searchString: string,
	movies: Movie[]
}
*/