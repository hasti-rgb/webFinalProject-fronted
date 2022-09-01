import * as actions from '../action/actionTypes'
let lastId = 0

export default function historyReducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: lastId++,
          title: action.payload.title,
          description: action.payload.description,
          status: 'ToDo',
          typeOfAction: 'Added',
          time: new Date().toLocaleString(),
        },
      ]
    case actions.TASK_DELETED:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
          typeOfAction: 'Deleted',
          time: new Date().toLocaleString(),
        },
      ]

    case actions.TASK_EDITED:
      return [
        ...state,
        {
          id: action.payload.id,

          title: action.payload.title,
          description: action.payload.description,
          status: action.payload.status,
          typeOfAction: 'Edited',
          time: new Date().toLocaleString(),
        },
      ]
    default:
      return state
  }
}
