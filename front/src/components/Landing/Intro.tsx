import { useTranslation } from 'react-i18next';
import GroupImg from '../../assets/rafikigroup.png'
import { FaPhoneAlt } from "react-icons/fa";
import { TranslationKeys } from '../../language/type-i18n';

const Intro = () => {
    const { t } = useTranslation<TranslationKeys>();

    return (
        <div className='lg:grid lg:grid-cols-[60%_1fr] xl:grid-cols-[40%_1fr]'>
            <div
                className="min-h-[50vh] bg-[#2C2949] text-white flex flex-col items-center lg:flex-row lg:justify-evenly lg:min-h-[30vh]"
            >
                <div className='min-h-[30vh] flex flex-col text-center lg:flex-start items-center justify-center mt-20 mb-32 w-[85%] md:leading-8 md:w-[70%] xl:w-full xl:ml-[10%] gap-2'>
                    <p className='text-3xl font-semibold mb-6 md:text-5xl md:leading-normal lg:text-[40px] lg:text-start lg:leading-[47px] lg:mb-[12px]'>{t('title' as TranslationKeys)}</p>
                    <p className='text-sm md:text-3xl lg:text-start lg:text-[20px] lg:w-[70%] lg:self-start lg:leading-[24px]'>{t('description' as TranslationKeys)}</p>
                    <div className='flex gap-2 mt-4 md:gap-6 md:mt-8 lg:mt-[48px]'>
                        <button className='px-8 py-4 bg-cs-gray rounded-[20px] flex gap-2 items-center font-semibold md:text-xl hover:bg-cs-gray-light hover:border hover:border-white transition-all'>
                            <FaPhoneAlt />
                            {t('buttonAction' as TranslationKeys)}
                        </button>
                        <button className='px-8 py-4 bg-transparent border rounded-[20px] font-semibold md:text-xl hover:bg-cs-purple-light transition-all'>{t('buttonAction2' as TranslationKeys)}</button>
                    </div>
                </div>
            </div>
            <div
                className=' relative flex items-center justify-center mb-6 lg:mb-0 py-5'
            >
            {/* <GroupSVG /> */}
            <div className='z-10 md:w-[60%] lg:w-full lg:h-full xl:w-[60%]'>
                <img src={GroupImg} className='min-h-[80%] min-w-full' />

            </div>

            {/* <img src={GroupImg} className='z-10 md:w-[60%] lg:w-full xl:w-[50%]' /> */}
            <div className='absolute -top-6 left-0 bg-[#2C2949] h-[90%] md:h-[35%] lg:h-full w-full -z-1 clip-bg md:clip-bg-md lg:clip-bg-lg lg:top-0 xl:clip-bg-xl' ></div>
        </div>
    </div>

    )
}

export default Intro