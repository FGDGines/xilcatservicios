import React from 'react'
import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import PoliticsBar from '../../components/PoliticsBar'
import { useTranslation } from 'react-i18next'

const Legal = () => {
    const { t } = useTranslation()
  return (
    <>
        <HeaderMenu />
        <section className='py-6 px-12 md:px-20 lg:px-40 xl:px-60 lg:pt-24' >
            <header className='mb-6 text-center'> 
            <h2 className='text-2xl'>{t('legal.title')}</h2> 
            <h4 className='mb-4'><span>www.xilcatservicios.com</span></h4> 
            <div className='1px border border-cs-purple w-[5%] m-auto'></div>
            </header>
                <h4 className='text-3xl mb-6 font-semibold uppercase'>I. {t('legal.section1.title')}</h4>
                <p>{t('legal.section1.description')}</p>

            <h4 className='text-2xl font-semibold my-6'>{t('legal.section2.title')}</h4>
            <p>{t('legal.section2.description')}</p>
            <ul className="list-disc my-6 ml-8">
                <li className='my-2'>{t('legal.section2.item1')}</li>
                <li className='my-2'>{t('legal.section2.item2')}</li>
                <li className='my-2'>{t('legal.section2.item3')}</li>
                <li className='my-2'>{t('legal.section2.item4')}</li>
            </ul>

            <h4 className='text-2xl font-semibold my-6'>{t('legal.section3.title')}</h4>
            <p className='bg-gradient rounded-lg p-8 xl:p-12 text-white'>
            {t('legal.section3.description')}
            </p>

            <h4 className='text-2xl font-semibold my-6'>{t('legal.section4.title')}</h4>
            <p>{t('legal.section4.description')}</p>
            
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section5.title')}</h4>
            <h6 className='font-semibold'>{t('legal.section5.description')}</h6>
            <ul className="list-disc ml-8 my-6">
                <li className='my-2'>{t('legal.section5.item1')}
                </li>
                <li className='my-2'>{t('legal.section5.item2')}</li>
                <li className='my-2'>{t('legal.section5.item3')}</li>
                <li className='my-2'>{t('legal.section5.item4')}</li>
                <li className='my-2'>{t('legal.section5.item5')}</li>
                <li className='my-2'>{t('legal.section5.item6')}</li>
                <li className='my-2'>{t('legal.section5.item7')}</li>
            </ul>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section6.title')}</h4>
            <p>{t('legal.section6.description')}</p>
            
            <h3 className='text-3xl font-semibold my-6'>{t('legal.section7.title')}</h3>
            <p>{t('legal.section7.description')}
            </p>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section8.title')}</h4>
            <p>{t('legal.section8.description')}
            </p>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section9.title')}</h4>
            <p>{t('legal.section9.description')}
            </p>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section10.title')}</h4>
            <p className='mb-4'>{t('legal.section10.text1')}</p>
            <p className='mb-4'>{t('legal.section10.text2')}</p>
            <p className='mb-4'>{t('legal.section10.text3')}</p>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section11.title')}</h4>
            <p>{t('legal.section11.description')}</p>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section12.title')}</h4>
            <p>{t('legal.section12.description1')}</p>
            <p className='mt-4'>{t('legal.section12.description2')}</p>
            <p className='mt-4'>{t('legal.section12.description3')}</p>

            <h4 className='text-2xl font-semibold my-6'>{t('legal.section13.title')}</h4>
            <p>{t('legal.section13.description1')}</p>
            <ul className="list-disc ml-8 my-6">
                <li className='mb-2'>{t('legal.section13.item1')}
                </li>
                <li className='mb-2'>{t('legal.section13.item2')}</li>
                <li className='mb-2'>{t('legal.section13.item3')}</li>
                <li className='mb-2'>{t('legal.section13.item4')}</li>
                <li className='mb-2'>{t('legal.section13.item5')}</li>
                <li className='mb-2'>{t('legal.section13.item6')}</li>
                <li className='mb-2'>{t('legal.section13.item7')}</li>
            </ul>
            <h6 className='font-semibold mb-4'>{t('legal.section13.description2')}</h6>
            <ul className="list-disc ml-8">
                <li className='mb-2'>{t('legal.section13.item8')}</li>
                <li className='mb-2'>{t('legal.section13.item9')}</li>
                <li className='mb-2'>{t('legal.section13.item10')}</li>
                <li className='mb-2'>{t('legal.section13.item11')}</li>
                <li className='mb-2'>{t('legal.section13.item12')}</li>
                <li className='mb-6'>{t('legal.section13.item13')}</li>
            </ul>
            <h6 className='font-semibold'>{t('legal.section13.description3')}
            </h6>
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section14.title')}</h4>
            <p>{t('legal.section14.description')}</p>     
            <h4 className='text-2xl font-semibold my-6'>{t('legal.section15.title')}</h4>
            <p>{t('legal.section15.description')}</p>
            <h4 className='text-3xl font-semibold my-6'>II. {t('legal.section16.title')}</h4>
            <p>{t('legal.section16.description')}
            </p>
            <div className='mt-12'><a href="mailto:#">gestion@xilcatservicios.com</a></div>
        </section>
        <Footer />
        <PoliticsBar />
    </>
  )
}

export default Legal