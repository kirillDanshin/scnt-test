import store from '@store'
import { wrapReducers } from 'redaction/immutable'
import reducers from './unwrapped'

export default wrapReducers(reducers, store.dispatch)
