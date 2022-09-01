import PlusIcon from '../../Icons/plus-svgrepo-com'
import Button from '../Button/Button'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { taskAdded } from '../../redux/action/actions'
import store from '../../redux/store/configure-store.js'
const HomeForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  console.log(store.getState())

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && description) {
      store.dispatch(taskAdded(title, description))
      console.log('after add:')
      console.log(store.getState())
      navigate('/taskPage')
    } else {
      alert('Please fill in the blanks!')
    }
  }
  return (
    <>
      <p className='task-text'>Add a new Task</p>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className='title-container'>
          <input
            type='text'
            id='title'
            className='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='hdesc-container'>
          <input
            type='text'
            id='description'
            className='h-desc'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button
          nameOfClass='addBtn'
          typOfBtn='submit'
          // onClick={() => navigate('/taskPage')}
        >
          <PlusIcon />
          Add
        </Button>
      </form>
    </>
  )
}
export default HomeForm
