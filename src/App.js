import './App.css'
import TodoItem from './components/TodoItem/TodoItem'

import EditPage from './pages/Edit/EditPage'
import HomePage from './pages/Home/HomePage'
import TaskPage from './pages/Tasks/TasksPage'

function App() {
  return (
    <div className='App'>
      {/* <EditPage /> */}
      <HomePage />
      {/* <TaskPage /> */}
      {/* <TodoItem item='' /> */}
    </div>
  )
}

export default App
