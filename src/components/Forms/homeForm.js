import PlusIcon from '../../Icons/plus-svgrepo-com'
import Button from '../Button/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeForm = () => {
  const navigate = useNavigate()

  return (
    <>
      <p className='task-text'>Add a new Task</p>
      <form className='form'>
        <div className='title-container'>
          <input type='text' className='title' placeholder='Title' />
        </div>
        <div className='hdesc-container'>
          <input type='text' className='h-desc' placeholder='Description' />
        </div>

        <Button
          nameOfClass='addBtn'
          typOfBtn='submit'
          onClick={() => navigate('/taskPage')}
        >
          <PlusIcon />
          Add
        </Button>
      </form>
    </>
  )
}
export default HomeForm
