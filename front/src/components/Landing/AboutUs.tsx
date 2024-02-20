import { useTranslation } from 'react-i18next';
import worldmap from '../../assets/worldmap.png'
import { useDeviceSize } from '../../hooks/Responsive'
import { TranslationKeys } from '../../language/type-i18n';
import { Chatbot } from '../../pre-components/Chatbot'
import { LegacyRef } from 'react';

const AboutUs = ({ setRef, refs } : { setRef: (id: number) => LegacyRef<HTMLDivElement>, refs: any }) => {
  const { t } = useTranslation<TranslationKeys>();

  const { isDesktop } = useDeviceSize()
  return (
    <div className='min-h-[20vh] px-6 py-2 mt-8 xl:mt-[84px] text-cs-purple' id="Us" ref={setRef(0)}>
      <p className='text-center text-3xl md:text-5xl mb-8 font-bold lg:mb-12 xl:mb-12'>{t('about.title' as TranslationKeys)}</p>
      <div className='flex flex-col lg:flex-row gap-4 xl:grid xl:grid-cols-2'>
        <p className='text-center text-[13px] flex-1 md:text-[21px] md:px-28 lg:px-10 lg:text-xl lg:text-justify xl:pt-12 xl:text-[23px]'>{t('about.description' as TranslationKeys)} </p>
        <div className='h-[250px] flex-1 xl:w-[80%] xl:h-auto'>
          <img src={worldmap} className='opacity-0 hidden lg:block lg:opacity-100' />
        </div>
      </div>
      {
        isDesktop && <Chatbot refs={refs} />
      }
    </div>
  )
}

export default AboutUs