
import Logo from '../assets/logo_white.png'
import { IoMenu } from "react-icons/io5";
import { useDeviceSize } from '../hooks/Responsive';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '../language/type-i18n';

const HeaderMenu = () => {
  const { t } = useTranslation<TranslationKeys>();
  const { isDesktop } = useDeviceSize()
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      text: t('footer.newsletter.links.1' as TranslationKeys),
      link: '/#Us'
    },
    {
      text: t('footer.newsletter.links.2' as TranslationKeys),
      link: '/#Actions'
    },
    {
      text: t('footer.newsletter.links.3' as TranslationKeys),
      link: '/#Services'
    },
    {
      text: t('footer.newsletter.links.4' as TranslationKeys),
      link: '/#Contact'
    },
    {
      text: t('footer.newsletter.links.5' as TranslationKeys),
      link: '/#'
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className='w-full h-[150px] bg-cs-purple flex justify-between items-center px-8 pt-12 pb-2 z-50 lg:px-20 lg:pt-[24px] xl:px-32'>
        <div className='h-full'>
            <img src={Logo} style={{ height: '100%'}}/>
        </div>
        {
          isDesktop && (
            <div className='flex gap-2 justify-around basis-2/3 text-white text-[18px] xl:basis-1/2'>
            {
              links.map(link => (
                <a href={link.link}>
                  {link.text}
                </a>
              ))
            }
          </div>
          )
        }
        {
          !isDesktop && (
            // <IoMenu className="text-6xl text-white" />
            <div className="relative">
      <button
        className="text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
        <IoMenu className="text-5xl text-white md:text-6xl" />
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {
            links.map(link => (
              <a
              href={link.link}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => toggleMenu()}
            >
              {link.text}
            </a>
            ))
          }
        </div>
      )}
    </div>
          )
        }

    </div>
  )
}

export default HeaderMenu