import EditIcon from '../../Icons/edit-solid'
import Button from '../Button/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import store from '../../redux/store/configure-store.js'
import { taskEdited } from '../../redux/action/actions'
import { useLocation } from 'react-router-dom'
import * as states from '../../utils/stateTypes'
import useStateToProps from '../../redux/action/readData'
import axios from 'axios'

const EditForm = () => {
  const [inputs, setInputs] = useState([])

  const { person } = useStateToProps((state) => ({
    person: state.loginReducer.enteredPerson,
  }))
  const location = useLocation()

  const [title, setTitle] = useState(location.state.title)
  const [description, setDescription] = useState(location.state.description)
  const [status, setStatus] = useState(location.state.status)

  const navigate = useNavigate()
  const id = location.state.id
  console.log('this is status =>')
  console.log(status)
  console.log('this is title =>')
  console.log(title)
  console.log('this is description =>')
  console.log(description)

  useEffect(() => {
    getTask()
  }, [])

  function getTask() {
    axios.get(`http://localhost:2080/api/tasks/${id}`).then(function(response) {
      console.log('tresponse.data')
      console.log(response.data)
      // setInputs(response.data)
      // console.log('this is inputs at first')
      // console.log(inputs)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && description) {
      store.dispatch(taskEdited(location.state.id, title, description, status))
      console.log(store.getState())
      axios
        .post('http://localhost:2080/api/tasks/add', inputs)
        .then(function(response) {
          console.log(response.data)
          navigate('/taskPage')
        })
      console.log('inputs')
      console.log(inputs)
    } else {
      alert('Please fill in the blanks!')
    }
  }
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    if (e.target.name === 'description') {
      setDescription(e.target.value)
    }
    if (e.target.name === 'status') {
      setStatus(e.target.value)
      console.log('after change status')
      console.log(e.target.value)
    }

    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  let handleState = () => {
    console.log('enter to handle state')

    switch (location.state.status) {
      case states.TODO:
        return (
          <>
            <option name='ToDo' value='ToDo'>
              ToDo
            </option>
            <option name='InProgress' value='InProgress'>
              InProgress
            </option>
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
        {person === 'User' ? (
          <>
            <div className='title-container'>
              <input
                type='text'
                name='title'
                className='title'
                placeholder='Title'
                value={title}
                // value={inputs.title}
                onChange={(e) => handleChange(e)}
                disabled
              />
            </div>
            <div className='eDesc-container'>
              <input
                type='text'
                name='description'
                className='e-desc'
                value={description}
                // value={inputs.description}
                onChange={(e) => handleChange(e)}
                disabled
              />
            </div>
            <div className='select-st'>
              <select
                id='states'
                name='status'
                // value={status}
                value={status}
                onChange={(e) => handleChange(e)}
              >
                {handleState()}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className='title-container'>
              <input
                type='text'
                name='title'
                className='title'
                placeholder='Title'
                value={title}
                // value={inputs.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='eDesc-container'>
              <input
                type='text'
                name='description'
                className='e-desc'
                value={description}
                // value={inputs.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='select-st'>
              <select
                id='states'
                name='status'
                // value={inputs.status}
                disabled
              >
                <option value='ToDo'>{location.state.status}</option>
              </select>
            </div>
          </>
        )}

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
