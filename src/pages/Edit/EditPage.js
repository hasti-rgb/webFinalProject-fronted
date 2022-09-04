import EditForm from '../../components/Forms/editForm'
import Header from '../../components/Header/header'
// import '../../styles/EditPage.css'
// import '../../styles/page.css'
import React from 'react'

function EditPage() {
  return (
    <div className='EditPage'>
      <Header temp='Edit' />
      <EditForm />
    </div>
  )
}

export default EditPage
