import { Map } from 'immutable'
import { createStore, combineReducers } from 'redaction/immutable'
import reducers from '@reducers/unwrapped'

const initialState = Map({})

const store = createStore({
	reducers: combineReducers(reducers),
	initialState,
})

export default store
