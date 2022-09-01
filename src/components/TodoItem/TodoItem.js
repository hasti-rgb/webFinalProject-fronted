import EditIcon from '../../Icons/edit-solid'
import TrashIcon from '../../Icons/trash-solid'

import Button from '../Button/Button'
import '../../styles/TodoItem.css'
import { useNavigate } from 'react-router-dom'
import store from '../../redux/store/configure-store.js'
import { taskDeleted } from '../../redux/action/actions'
import React, { useState } from 'react'
const TodoItem = ({ item, person }) => {
  const navigate = useNavigate()
  // const [newitem, setItem] = useState(item)

  const handleDelete = (e) => {
    e.preventDefault()
    store.dispatch(taskDeleted(item.id))
    navigate('/taskPage')
    console.log('after delete:')
    console.log(store.getState())
  }
  return (
    <div className='td-container'>
      <div className='td-inner'>
        <p className='tasks-title'>{item.title}</p>
        <p className='tasks-desc'>{item.description}</p>
        <div className='tasks-status'>
          <p>{item.status}</p>
        </div>
        {person === 'User' ? (
          <Button
            nameOfClass='edit-icon'
            typOfBtn='button'
            onClick={() =>
              navigate('/editPage', {
                state: {
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  status: item.status,
                },
              })
            }
          >
            <EditIcon fill='black' />
          </Button>
        ) : (
          <>
            <Button
              nameOfClass='edit-icon'
              typOfBtn='button'
              onClick={() =>
                navigate('/editPage', {
                  state: {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    status: item.status,
                  },
                })
              }
            >
              <EditIcon fill='black' />
            </Button>
            <Button
              nameOfClass='delete-icon'
              typOfBtn='button'
              onClick={(e) => handleDelete(e)}
            >
              <TrashIcon fill='black' />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
export default TodoItem
