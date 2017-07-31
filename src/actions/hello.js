import reducers from '@reducers'

export const setName = (name) => {
	reducers.hello.put({ name })
}

export default {
	setName,
}
