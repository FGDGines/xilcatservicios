import AboutUs from '../../components/Landing/AboutUs'
import Services from '../../components/Landing/Services'
import Offer from '../../components/Landing/Offer'
import OurTeam from '../../components/Landing/OurTeam'
import Contact from '../../components/Landing/Contact'
import Footer from '../../components/Footer'

const Landing = () => {
  return (
    <>
    <div className='flex flex-col px-4'>
      <AboutUs />
      <Services />
      <Offer />
      <OurTeam />
      <Contact />
    </div>
      <Footer />
    </>
  )
}

export default Landing