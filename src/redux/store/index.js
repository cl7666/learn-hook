import { createStore } from 'redux'
import count from '../reducers/count'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(count, composeWithDevTools());

export default store