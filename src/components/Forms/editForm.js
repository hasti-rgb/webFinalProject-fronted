import EditIcon from '../../Icons/edit-solid'
import Button from '../Button/Button'

const EditForm = () => {
  return (
    <>
      <p className='task-text'>Edit Task</p>
      <div className='form'>
        <div className='title-container'>
          <input type='text' className='title' placeholder='Title' />
        </div>
        <div className='eDesc-container'>
          <input type='text' className='e-desc' />
        </div>
        <div className='select-st'>
          <select id='states' name='states'>
            <option value='ToDo'>ToDo</option>
            <option value='InProgress'>InProgress</option>
            <option value='InQA'>InQA</option>
            <option value='Done'>Done</option>
            <option value='Deployed'>Deployed</option>
            <option value='Blocked'>Blocked</option>
          </select>
        </div>

        {/* <button className='edit-btn'>Edit</button>
        <button className='cancel-btn'>Cancel</button> */}
        <Button nameOfClass='edit-btn'>
          <EditIcon fill='white' />
          Edit
        </Button>
        <Button nameOfClass='cancel-btn'>Cancel</Button>
      </div>
    </>
  )
}
export default EditForm
