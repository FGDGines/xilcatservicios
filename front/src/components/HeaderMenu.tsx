
import Logo from '../assets/logo_white.png'
import { IoMenu } from "react-icons/io5";
import { useDeviceSize } from '../hooks/Responsive';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '../language/type-i18n';
import spanishIcon from '../assets/castellano.png';
import catalaIcon from '../assets/catala.png'
import inglesIcon from '../assets/ingles.png'
import Select from 'react-select';


type TOptions = {
  [idx: string]: string
}

const LanguageSelector = () => {
  const { i18n } = useTranslation<TranslationKeys>();

  const options: TOptions[] = [
    { value: 'ca', label: 'Catalán', image: catalaIcon },
    { value: 'es', label: 'Español', image: spanishIcon },
    { value: 'en', label: 'English', image: inglesIcon },
  ];
    const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).catch((error) => {
        console.error('Error al cambiar el idioma:', error);
    });
  }
  return (
    <div className="relative w-8">
      <select
        className=" absolute top-0 left-4 appearance-none bg-transparent border-none text-center text-gray-700 py-2 px-4 leading-tight focus:outline-none opacity-0"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-0 text-gray-700 w-4">
        {options.map((option) =>{
          if (option.value === i18n.language) return(
          <img
            key={option.value}
            src={option.image}
            alt={option.label}
            className="w-4 h-4 mr-1"
          />
        )})}
      </div>
    </div>
  );
};

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
      link: '/blog'
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
          <LanguageSelector />
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