import '../../styles/TasksPage.css'
import React from 'react'
// import store from '../../redux/store/configure-store.js'
import TodoItem from '../../components/TodoItem/TodoItem'
import useStateToProps from '../../redux/action/readData'
// import { useSelector } from 'react-redux'
function TaskPage() {
  // const todoList = useSelector((state) => state.todo.todoList)
  const { tasks } = useStateToProps((state) => ({
    tasks: state,
  }))

  return (
    <div className='TaskPage'>
      <div className='t-head'>
        <p className='t-head-p'>Tasks</p>
        <div className='t-body'>
          {tasks && tasks.length > 0 ? (
            tasks.map((item) => <TodoItem key={item.id} item={item} />)
          ) : (
            <p className='nothing-p'>
              You have nothing to do. Go get some sleep.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskPage
