import HomeForm from '../../components/Forms/homeForm'
import Header from '../../components/Header/header'
import '../../styles/HomePage.css'
import '../../styles/page.css'

function HomePage() {
  return (
    <div className='HomePage'>
      <Header temp='Home' />

      <HomeForm />
    </div>
  )
}

export default HomePage
