import AboutUs from '../../components/Landing/AboutUs'
import Services from '../../components/Landing/Services'
import Offer from '../../components/Landing/Offer'
import OurTeam from '../../components/Landing/OurTeam'
import Contact from '../../components/Landing/Contact'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'
import Intro from '../../components/Landing/Intro'
import PoliticsBar from '../../components/PoliticsBar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem('auth_token')

  useEffect(() => {
    const keyFunction = (e: KeyboardEvent) => {
      if (e.key === 'l' && e.ctrlKey) {
        auth ? navigate('/intranet/main') : navigate('/intranet/login')
      }
    }

    document.addEventListener('keydown', keyFunction)

    return () => document.removeEventListener('keydown', keyFunction)
  }, [])
  return (
    <>
      <HeaderMenu />
      <div className='flex flex-col scroll-smooth text-cs-purple'>
        <Intro />
        <AboutUs />
        <Services />
        <Offer />
        <OurTeam />
        <Contact />
      </div>
      <Footer />
      <PoliticsBar />
    </>
  )
}

export default Landing