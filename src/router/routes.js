import HomePage from '../pages/Home/HomePage'

import EditPage from '../pages/Edit/EditPage'
import TaskPage from '../pages/Tasks/TasksPage'
const routes = [
  {
    component: HomePage,
    path: '/homePage',
  },
  {
    component: EditPage,
    path: '/editPage',
  },
  {
    component: TaskPage,
    path: '/taskPage',
  },
]
export default routes
