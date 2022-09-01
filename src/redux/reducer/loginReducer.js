import * as actions from '../action/actionTypes'

export default function loginReducer(state = 'user', action) {
  switch (action.type) {
    case actions.ADMIN_LOGIN:
      return {
        ...state,
        enteredPerson: action.payload.enteredPerson,
      }

    case actions.USER_LOGIN:
      return {
        ...state,
        enteredPerson: action.payload.enteredPerson,
      }
    default:
      return state
  }
}
