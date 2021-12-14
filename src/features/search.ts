// Actions och reducer för state-variabeln searchString
import { createReducer, createAction } from '@reduxjs/toolkit'

const changeSearchString = createAction<string>('change search string')

const actions = {
	changeSearchString
}

const initialState = ''

const reducer = createReducer(initialState, {
	// Söksträngen ändras - byt ut gamla värdet mot det nya, som finns i action.payload
	[changeSearchString.toString()]: (state, action) => action.payload
})


export { actions, reducer }
