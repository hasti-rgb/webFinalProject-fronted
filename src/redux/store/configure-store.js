import { legacy_createStore as createStore } from 'redux'
// import reducer from '../reducer/reducer'
// import reducer2 from '../reducer/reducer2'
import combineReducers from '../reducer/index'
const store = createStore(combineReducers, {})
// export const store2 = createStore(reducer2)

export default store
