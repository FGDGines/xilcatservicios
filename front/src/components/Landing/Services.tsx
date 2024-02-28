import { FaHeartbeat, FaFlag, FaBalanceScale } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import Study from '../../assets/panastudy.svg'
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../language/type-i18n";
import { LegacyRef } from "react";

type TOptions = {
  icon: JSX.Element;
  title: string;
  text: string;
}

type TParams = {
  setRef: (id: number) => LegacyRef<HTMLDivElement>
  contactRef: any
}

const Services = ({ setRef, contactRef }: TParams) => {
  const { t } = useTranslation<TranslationKeys>();

  const options: TOptions[] = [
    {
      icon: <FaHeartbeat className="text-3xl md:text-4xl" />,
      title: t('services.service.a.subtitle' as TranslationKeys),
      text: t('services.service.a.description' as TranslationKeys)
    },
    {
      icon: <FaFlag className="text-3xl md:text-4xl" />,
      title: t('services.service.b.subtitle' as TranslationKeys),
      text: t('services.service.b.description' as TranslationKeys)
    },
    {
      icon: <MdAirplanemodeActive className="text-3xl md:text-4xl" />,
      title: t('services.service.c.subtitle' as TranslationKeys),
      text: t('services.service.c.description' as TranslationKeys)
    },
    {
      icon: <FaBalanceScale className="text-3xl md:text-4xl" />,
      title: t('services.service.d.subtitle' as TranslationKeys),
      text: t('services.service.d.description' as TranslationKeys)
    },
    {
      icon: <img src={Study} />,
      text: '',
      title: ''
    },
  ]

  const handleNavigate = () => contactRef?.current[3].scrollIntoView({ behavior: 'smooth' })


  return (
    <div className='min-h-[20vh] px-6 py-2 mt-4 md:mt-20 lg:mt-12 text-cs-purple' id="Actions" ref={setRef(1)}>
      <p className='text-center text-2xl mb-8 font-bold md:text-[40px]'>{t('services.title' as TranslationKeys)}</p>
      <p className='text-center text-[11px] md:px-20 md:text-[20px]'>{t('services.description' as TranslationKeys)}</p>
      <div className='mt-8 md:px-20 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-0'>
        {
          options.map((option, idx) => (
            <div
              className={`flex flex-col mt-4 md:mt-24 gap-2 ${idx % 2 === 1 ? 'items-end text-end md:text-end lg:items-start lg:text-start' : 'lg:items-end lg:text-end'} ${idx === options.length - 1 && 'col-start-2 col-end-3 row-start-1 row-span-2 justify-center items-center hidden lg:flex'} `}
            >
              <p>{option.icon}</p>
              <p className='text-2xl font-semibold md:text-4xl lg:text-[26px]'>{option.title}</p>
              <p className='text-[12px] w-[65%] md:text-[20px] lg:w-[80%] lg:text-[16px]'>{option.text}</p>
            </div>
          ))
        }

        <div
          onClick={handleNavigate}
          className='col-span-2 w-full h-20 flex justify-center items-center  mt-20 mb-8 md:my-20 lg:col-span-3 lg:mt-0 lg:mb-16'
        >
          <p

            className="text-[14px] text-center px-6 py-4 rounded-[20px] text-white shadow flex items-center gap-2 md:text-[22px] hover:-translate-y-1 hover:-translate-x-1 hover:cursor-pointer transition-all" style={{
              // justifyContent: "center",
              background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)",
              // padding: 11,
              boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)"
            }}>
            <span>
              {t('buttonAction2' as TranslationKeys)}
            </span>
            <IoChevronDown />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services