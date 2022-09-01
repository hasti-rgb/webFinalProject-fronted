import * as actions from './actionTypes'

export function taskAdded(title, description) {
  return {
    type: actions.TASK_ADDED,
    payload: {
      title,
      description,
    },
  }
}

export function taskEdited(id, title, description, status) {
  return {
    type: actions.TASK_EDITED,
    payload: {
      id,
      title,
      description,
      status,
    },
  }
}
export function taskDeleted(id) {
  return {
    type: actions.TASK_DELETED,
    payload: {
      id,
    },
  }
}

export function adminLogin(enteredPerson) {
  return {
    type: actions.ADMIN_LOGIN,
    payload: {
      enteredPerson,
    },
  }
}
export function userLogin(enteredPerson) {
  return {
    type: actions.USER_LOGIN,
    payload: {
      enteredPerson,
    },
  }
}
