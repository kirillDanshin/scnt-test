import { fromJS } from 'immutable'

export const initialState = fromJS({
	name: 'Kirill',
})

export const put = (state, payload) => (
	state.set('name', payload.name)
)
