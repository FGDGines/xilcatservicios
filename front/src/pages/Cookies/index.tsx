import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import PoliticsBar from '../../components/PoliticsBar'
import { useTranslation } from 'react-i18next'

const Cookies = () => {
  const { t } = useTranslation()
  return (
    <>
        <HeaderMenu />
        <section className='py-6 px-12 md:px-20 lg:px-40 xl:px-60 lg:pt-24'>
            <header className='mb-6 text-center'>
                <h1 className='text-3xl uppercase'>{t('cookies.title')}</h1>
                <h5 className='my-4'>www.xilcatservicios.com</h5>
                <div className='1px border border-cs-purple w-[5%] m-auto'></div>
            </header>

            <p>
              {t('cookies.description')}
            </p>
          <h3 className='text-3xl mb-4 mt-8'>{t('cookies.subtitle1')}</h3>
          <p>{t('cookies.subdescription1')}</p>
          <h3 className='text-3xl mb-4 mt-8'>{t('cookies.subtitle2')}</h3>
          <p>
          {t('cookies.subdescription2')}
          </p>
          <h3 className='text-3xl mb-4 mt-8'>{t('cookies.subtitle3')}</h3>
          <p>{t('cookies.subdescription3')}</p>
            <ul className='list-disc my-6 ml-8'>
              <li className='my-2'>Facebook:&nbsp;<span>https://www.facebook.com/policies/cookies/</span> </li>
              <li className='my-2'>Twitter:&nbsp;<span>https://twitter.com/es/privacy</span></li>
              <li className='my-2'>Instagram:&nbsp;<span>https://help.instagram.com/1896641480634370?ref=ig</span></li>
              <li className='my-2'>YouTube:&nbsp;<span>https://policies.google.com/privacy?hl=es-419&gl=mx</span></li>
              <li className='my-2'>Pinterest:&nbsp;<span> https://policy.pinterest.com/es/privacy-policy</span></li>
              <li className='my-2'>LinkedIn:&nbsp;<span>https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies</span></li>
            </ul>
          <h3 className='text-3xl mb-4 mt-8'>{t('cookies.subtitle4')}</h3>
          <p>{t('cookies.subdescription4')}</p>
          <div className='mt-12'><a href="mailto:#">gestion@xilcatservicios.com</a></div>
      </section>
        <Footer />
        <PoliticsBar />
    </>
  )
}

export default Cookies