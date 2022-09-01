import '../../styles/TasksPage.css'
import React from 'react'
// import store from '../../redux/store/configure-store.js'
import TodoItem from '../../components/TodoItem/TodoItem'
import useStateToProps from '../../redux/action/readData'
import Button from '../../components/Button/Button'
import HomeIcon from '../../Icons/home-solid'
import { useNavigate } from 'react-router-dom'
import reducer from '../../redux/reducer/reducer'
import SignInIcon from '../../Icons/sign-solid'
import HistoryIcon from '../../Icons/history-solid'

// import { useSelector } from 'react-redux'
function TaskPage() {
  const navigate = useNavigate()

  // const todoList = useSelector((state) => state.todo.todoList)
  const { tasks } = useStateToProps((state) => ({
    tasks: state.reducer,
  }))
  const { person } = useStateToProps((state) => ({
    person: state.loginReducer.enteredPerson,
  }))

  return (
    <div className='TaskPage'>
      <div className='t-head'>
        {person === 'User' ? (
          <>
            <Button
              typOfBtn='button'
              nameOfClass='home-btn'
              onClick={() => navigate('/homePage')}
            >
              <HomeIcon />
            </Button>
            <Button
              typOfBtn='button'
              nameOfClass='home-btn'
              onClick={() => navigate('/loginPage')}
            >
              <SignInIcon />
            </Button>
            <Button
              typOfBtn='button'
              nameOfClass='home-btn'
              onClick={() => navigate('/historyPage')}
            >
              <HistoryIcon />
            </Button>
          </>
        ) : (
          <Button
            typOfBtn='button'
            nameOfClass='home-btn'
            onClick={() => navigate('/loginPage')}
          >
            <SignInIcon />
          </Button>
        )}

        <p className='t-head-p'>Tasks</p>
        <div className='t-body'>
          {tasks && tasks.length > 0 ? (
            tasks.map((item) => (
              <TodoItem key={item.id} item={item} person={person} />
            ))
          ) : (
            <>
              <p className='nothing p1'>
                You have nothing to do. Go get some sleep.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskPage
