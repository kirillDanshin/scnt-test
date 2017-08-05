import reducers from '@reducers'

export const selectMediaIdx = idx => {
	reducers.product.set({ key: 'selectedMediaIdx', value: idx })
}

export default {
	selectMediaIdx,
}
