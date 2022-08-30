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
