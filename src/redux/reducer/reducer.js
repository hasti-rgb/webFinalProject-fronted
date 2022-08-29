import * as actions from './actionTypes'
let lastId = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          description: action.payload.descriiption,
          status: 'ToDo',
        },
      ]
    case actions.TASK_DELETED:
      return state.filter((task) => task.id !== action.id)
    // case 'taskTitleChanged':
    // case 'taskDescriptionChanged':
    // case 'taskStatusChange':
    default:
      return state
  }
}
