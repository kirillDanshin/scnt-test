import { fromJS } from 'immutable'

export const initialState = fromJS({
	main: {
		// placeholder data.
		// in real-world usege should be removed
		// and corresponding request should be done.
		list: [
			{
				name: 'Perfumes',
			},
			{
				name: 'Colognes',
			},
			{
				name: 'Recomentations',
			},
			{
				name: 'Perfume of the Month',
			},
			{
				name: 'Gift Set',
			},
			{
				name: 'Gift Subscription',
			},
			{
				name: 'Extra Cases',
			},
			{
				name: 'Brands',
			},
		],
	},
})

export const put = (state, payload) => (
	state.set('name', payload.name)
)
