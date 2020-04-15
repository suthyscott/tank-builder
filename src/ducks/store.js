import {createStore} from 'redux'
import tanksReducer from './tanksReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(tanksReducer, devToolsEnhancer())