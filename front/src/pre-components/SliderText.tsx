import { LegacyRef, useState } from "react"
import { Service } from "../pre-types/Service";
import { useDeviceSize } from "../hooks/Responsive";
import Image from "./amico.svg"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { TranslationKeys } from "../language/type-i18n";
import { useTranslation } from "react-i18next";

export const SliderText = ({ setRef } : { setRef: (id: number) => LegacyRef<HTMLDivElement> }) => {
    const { t } = useTranslation<TranslationKeys>();
    const { isDesktop } = useDeviceSize();
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const service: Service[] = [
        { name: t('powers.power.a.title' as TranslationKeys), description: t('powers.power.a.description' as TranslationKeys) },
        { name: t('powers.power.b.title' as TranslationKeys), description: t('powers.power.b.description' as TranslationKeys) },
        { name: t('powers.power.c.title' as TranslationKeys), description: t('powers.power.c.description' as TranslationKeys) },
        { name: t('powers.power.d.title' as TranslationKeys), description: t('powers.power.d.description' as TranslationKeys) },
        { name: t('powers.power.e.title' as TranslationKeys), description: t('powers.power.e.description' as TranslationKeys) },
        { name: t('powers.power.f.title' as TranslationKeys), description: t('powers.power.f.description' as TranslationKeys) },
        { name: t('powers.power.g.title' as TranslationKeys), description: t('powers.power.g.description' as TranslationKeys) },
        { name: t('powers.power.h.title' as TranslationKeys), description: t('powers.power.h.description' as TranslationKeys) },
        { name: t('powers.power.i.title' as TranslationKeys), description: t('powers.power.i.description' as TranslationKeys) },

    ]

    const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide === service.length - 1 ? 0 : prevSlide + 1));
    const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide === 0 ? service.length - 1 : prevSlide - 1));

    return <>
        <h1 ref={setRef(2)} id="Services" style={{ fontWeight: 700 }} className="text-center my-3 text-[30px] md:text-[40px] text-cs-purple">{t('powers.title' as TranslationKeys)}</h1>
        <h2 style={{ fontWeight: 300 }} className="text-center mt-3 mb-8 text-[16px] md:text-[21px] md:px-24 text-cs-purple">{t('powers.description' as TranslationKeys)}</h2>
        <div className="flex w-full mx-auto xl:w-[90%]">
            {service.map((item, index) => (
                <div
                    key={index}
                    className={`flex relative ${index === currentSlide ? 'block' : 'hidden'} w-full m-10  ${isDesktop ? '-mb-44' : null}`}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button className="absolute text-center top-0 left-1/2 transform -translate-x-1/2 -mt-6 px-4 py-2 rounded-[14px] text-[14px] md:text-[22px] md:rounded-[20px]" style={{
                        // borderRadius: 14,
                        color: "white",
                        justifyContent: "center",
                        background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)",
                        // padding: '10 20',
                        marginTop: -20,
                        // fontSize: 14
                    }}>{t('powers.buttonAction' as TranslationKeys)}</button>

                    <div
                        className="text-center h-[500px]"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 100,
                            // height: 536,
                            width: "100%",
                            borderRadius: 20,
                            backgroundColor: "#EBEBEB",
                            boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <h2 style={{ fontWeight: 700 }} className="text-[26px] md:text-[33px]">{item.name}</h2> <br />
                        <p style={{ fontWeight: 300 }} className="text-[12px] md:text-[16px]">{item.description}</p>
                    </div>
                    <button onClick={prevSlide} className="rounded-full absolute top-1/2 transform -translate-y-1/2 left-4 z-10 text-5xl">
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button onClick={nextSlide} className="rounded-full absolute top-1/2 transform -translate-y-1/2 right-4 z-10 text-5xl">
                        <IoIosArrowDroprightCircle />
                    </button>
                    <div className="flex gap-4 justify-center absolute bottom-4 left-0 right-0">
                        {service.map((_, index) => (
                            <div key={index} className="cursor-pointer" style={{ width: 14, height: 14, backgroundColor: index === currentSlide ? "#2C2949" : "rgba(37, 35, 35, 0.10)", borderRadius: 18 }} onClick={() => setCurrentSlide(index)}></div>
                        ))}
                    </div>
                </div>
            ))}

            {isDesktop && <img src={Image} className="-mb-56 z-30 lg:w-[40%] xl:ml-12" alt="Icono" />}

        </div>
        {isDesktop && <div style={{ height: 322, background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)" }} className="w-full mb-16" />}
    </>
}