import { combineReducers } from 'redux'
import reducer from './reducer'
import loginReducer from './loginReducer'
import historyReducer from './historyReducer'

export default combineReducers({
  reducer,
  loginReducer,
  historyReducer,
})
