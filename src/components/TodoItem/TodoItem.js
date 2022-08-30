import EditIcon from '../../Icons/edit-solid'
import TrashIcon from '../../Icons/trash-solid'

import Button from '../Button/Button'
import '../../styles/TodoItem.css'
import { useNavigate } from 'react-router-dom'
import store from '../../redux/store/configure-store.js'
import { taskDeleted } from '../../redux/action/actions'
import React, { useState } from 'react'
const TodoItem = ({ item }) => {
  const navigate = useNavigate()
  const [newitem, setItem] = useState(item)

  const handleDelete = (e) => {
    e.preventDefault()
    store.dispatch(taskDeleted(item.id))
    setItem('')
    console.log(store.getState())
  }
  if (newitem.title !== undefined) {
    console.log(newitem.title)
    return (
      <div className='td-container'>
        <div className='td-inner'>
          <p className='tasks-title'>{newitem.title}</p>
          <p className='tasks-desc'>{newitem.description}</p>
          <div className='tasks-status'>
            <p>{newitem.status}</p>
          </div>
          <Button
            nameOfClass='delete-icon'
            typOfBtn='button'
            onClick={(e) => handleDelete(e)}
          >
            <TrashIcon fill='black' />
          </Button>
          <Button
            nameOfClass='edit-icon'
            typOfBtn='button'
            onClick={() =>
              navigate('/editPage', {
                state: {
                  id: newitem.id,
                  title: newitem.title,
                  description: newitem.description,
                  status: newitem.status,
                },
              })
            }
          >
            <EditIcon fill='black' />
          </Button>
        </div>
      </div>
    )
  }
}
export default TodoItem
