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
