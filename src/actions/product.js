import reducers from '@reducers'
import { fromJS } from 'immutable'

export const selectMediaIdx = idx => {
	reducers.product.set({ key: 'selectedMediaIdx', value: idx })
}

export const vote = (type, opinion, percent) => {
	reducers.product.setIn({
		key: ['votes', type, 'opinion'],
		value: fromJS({ text: opinion, percent })
	})
}

export const selectOptionIdx = idx => {
	reducers.product.set({ key: 'selectedOptionIdx', value: idx })
}

export const selectInfoIdx = idx => {
	reducers.product.set({ key: 'selectedInfoIdx', value: idx })
}

export default {
	selectMediaIdx,
	selectOptionIdx,
	selectInfoIdx,
}
