import PlusIcon from '../../Icons/plus-svgrepo-com'
import Button from '../Button/Button'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { taskAdded } from '../../redux/action/actions'
import store from '../../redux/store/configure-store.js'
import axios from 'axios'

const HomeForm = () => {
  const [inputs, setInputs] = useState([])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  console.log(store.getState())

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (title && description) {
    if (title && description) {
      store.dispatch(taskAdded(title, description))
      console.log('after add:')
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

    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  return (
    <>
      <p className='task-text'>Add a new Task</p>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='title-container'>
          <input
            type='text'
            id='title'
            name='title'
            className='title'
            placeholder='Title'
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='hdesc-container'>
          <input
            type='text'
            id='description'
            name='description'
            className='h-desc'
            placeholder='Description'
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <input type='hidden' id='status' name='status' value='Todo' /> */}
        <Button nameOfClass='addBtn' typOfBtn='submit'>
          <PlusIcon />
          Add
        </Button>
      </form>
    </>
  )
}
export default HomeForm
