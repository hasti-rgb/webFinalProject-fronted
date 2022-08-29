import EditIcon from '../../Icons/edit-solid'
import Button from '../Button/Button'
import '../../styles/TodoItem.css'
const TodoItem = ({ item }) => {
  return (
    <div className='td-container'>
      <div className='td-inner'>
        <p className='tasks-title'>Task title goes here</p>
        <p className='tasks-desc'>
          desc Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className='tasks-status'>
          <p>Todo</p>
        </div>
        <Button nameOfClass='edit-icon' typOfBtn='button'>
          <EditIcon fill='black' />
        </Button>
      </div>
    </div>
  )
}
export default TodoItem
