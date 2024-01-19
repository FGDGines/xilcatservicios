import AboutUs from '../../components/Landing/AboutUs'
import Services from '../../components/Landing/Services'
import Offer from '../../components/Landing/Offer'
import OurTeam from '../../components/Landing/OurTeam'
import Contact from '../../components/Landing/Contact'
import Footer from '../../components/Footer'
import HeaderMenu from '../../components/HeaderMenu'
import Intro from '../../components/Landing/Intro'
import PoliticsBar from '../../components/PoliticsBar'

const Landing = () => {
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