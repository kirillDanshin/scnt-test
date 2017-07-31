import { fromJS } from 'immutable'

export const initialState = fromJS({
	items: {
		list: [],
		count: (Math.random() * 10) | 0 + 3,
	},
})

export const put = (state, payload) => (
	state.set('name', payload.name)
)
