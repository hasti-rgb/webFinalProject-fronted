import EditIcon from '../../Icons/edit-solid'
import Button from '../Button/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import store from '../../redux/store/configure-store.js'
import { taskEdited } from '../../redux/action/actions'
import { useLocation } from 'react-router-dom'
import * as states from '../../utils/stateTypes'

const EditForm = () => {
  const location = useLocation()

  const [title, setTitle] = useState(location.state.title)
  const [description, setDescription] = useState(location.state.description)
  const [status, setStatus] = useState(location.state.status)
  const navigate = useNavigate()
  console.log(store.getState())

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && description) {
      store.dispatch(taskEdited(location.state.id, title, description, status))
      console.log(store.getState())
      navigate('/taskPage')
    } else {
      alert('Please fill in the blanks!')
    }
  }
  let handleState = () => {
    switch (location.state.status) {
      case states.TODO:
        return (
          <>
            <option value='ToDo'>ToDo</option>
            <option value='InProgress'>InProgress</option>
          </>
        )
      case states.INPROGRESS:
        return (
          <>
            <option value='InProgress'>InProgress</option>
            <option value='InQA'>InQA</option>
            <option value='Blocked'>Blocked</option>
          </>
        )
      case states.BLOCKED:
        return (
          <>
            <option value='Blocked'>Blocked</option>
            <option value='ToDo'>ToDo</option>
          </>
        )
      case states.INQA:
        return (
          <>
            <option value='InQA'>InQA</option>
            <option value='Done'>Done</option>
            <option value='ToDo'>ToDo</option>
          </>
        )
      case states.DONE:
        return (
          <>
            <option value='Done'>Done</option>
            <option value='Deployed'>Deployed</option>
          </>
        )
      case states.DEPLOYED:
        return (
          <>
            <option value='Deployed'>Deployed</option>
          </>
        )
      default:
        return <></>
    }
  }
  return (
    <>
      <p className='task-text'>Edit Task</p>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='title-container'>
          <input
            type='text'
            className='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='eDesc-container'>
          <input
            type='text'
            className='e-desc'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='select-st'>
          <select
            id='states'
            name='states'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {handleState()}
          </select>
        </div>
        <Button typOfBtn='submit' nameOfClass='edit-btn'>
          <EditIcon fill='white' />
          Edit
        </Button>
        <Button
          typOfBtn='button '
          nameOfClass='cancel-btn'
          onClick={() => navigate('/taskPage')}
        >
          Cancel
        </Button>
      </form>
    </>
  )
}
export default EditForm
