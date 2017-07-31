import { fromJS } from 'immutable'

export const initialState = fromJS({
	name: 'World',
})

export const put = (state, payload) => (
	state.set('name', payload.name)
)
