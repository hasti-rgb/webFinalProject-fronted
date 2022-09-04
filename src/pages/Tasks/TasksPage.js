import '../../styles/TasksPage.css'
import React from 'react'
// import store from '../../redux/store/configure-store.js'
import TodoItem from '../../components/TodoItem/TodoItem'
import useStateToProps from '../../redux/action/readData'
import Button from '../../components/Button/Button'
import HomeIcon from '../../Icons/home-solid'
import { useNavigate } from 'react-router-dom'
import SignInIcon from '../../Icons/sign-solid'
import HistoryIcon from '../../Icons/history-solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import store from '../../redux/store/configure-store.js'
import { taskAdded } from '../../redux/action/actions'

function TaskPage() {
  const navigate = useNavigate()
  const [listOfTasks, setTasks] = useState([])
  useEffect(() => {
    getTasks()
  }, [])
  function getTasks() {
    axios.get('http://localhost:2080/api/tasks/').then(function(response) {
      console.log(response.data)
      setTasks(response.data)
      console.log('listOfTask is here=>')
      console.log(listOfTasks)
      console.log('listOfTask at redux store is here=>')
      console.log(store.getState())
    })
  }

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
          <div className='grid-container'>
            {listOfTasks && listOfTasks.length > 0 ? (
              listOfTasks.map((item) => (
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
    </div>
  )
}

export default TaskPage
