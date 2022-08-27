import Button from '../Button/Button'

const HomeForm = () => {
  return (
    <>
      <p className='task-text'>Add a new Task</p>
      <div className='form'>
        <div className='title-container'>
          <input type='text' className='title' placeholder='Title' />
        </div>
        <div className='hdesc-container'>
          <input type='text' className='h-desc' placeholder='Description' />
        </div>

        <Button nameOfClass='addBtn'>Add</Button>
      </div>
    </>
  )
}
export default HomeForm
