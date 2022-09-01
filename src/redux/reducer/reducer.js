import * as actions from '../action/actionTypes'
let lastId = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          description: action.payload.description,
          status: 'ToDo',
        },
      ]
    case actions.TASK_DELETED:
      // return state.filter((task) => task.id !== action.id)
      const todoListArr = state
      todoListArr.forEach((task, index) => {
        if (task.id === action.payload.id) {
          todoListArr.splice(index, 1)
        }
        
      })
      state = todoListArr
      return [...state]

    case actions.TASK_EDITED:
      return [
        ...state.map((task) =>
          task.id !== action.payload.id
            ? task
            : {
                ...task,
                title: action.payload.title,
                description: action.payload.description,
                status: action.payload.status,
              }
        ),
      ]

    // case 'taskTitleChanged':
    // case 'taskDescriptionChanged':
    // case 'taskStatusChange':
    default:
      return state
  }
}
