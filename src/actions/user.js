import reducers from '@reducers'

export const setName = (name) => {
	reducers.user.put({ name })
}

export default {
	setName,
}
