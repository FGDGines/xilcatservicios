import { LegacyRef, useState } from "react";
import Image from './../assets/imgs/carrusel-img-1.jpeg';
import Image2 from './../assets/imgs/carrusel-img-2.jpeg';
import Image3 from './../assets/imgs/carrusel-img-3.jpeg';
import { Adviser } from "../pre-types/Adviser";
import { useDeviceSize } from "../hooks/Responsive";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../language/type-i18n";

export const Slider = ({ setRef } : { setRef: (id: number) => LegacyRef<HTMLDivElement> }) => {
    const { t } = useTranslation<TranslationKeys>();
    const { isDesktop, isMobileOrTablet } = useDeviceSize();
    // NO FUNCIONA CON i18n
    // const [asesor,] = useState<Adviser[]>([
    //     // {},
    //     { nombre: 'Maria Torres', profesion: "Especialista en Juridicción", imagen: Image },
    //     { nombre: 'Bella Fuentes', profesion: "Especialista en Juridicción", imagen: Image2 },
    //     { nombre: 'Martha Ventanilla', profesion: "Especialista en Juridicción", imagen: Image3 }
    // ])

    const asesor: Adviser[] = [
        { nombre: t('teams.team.a.name' as TranslationKeys), profesion: t('teams.team.a.profession' as TranslationKeys), imagen: Image },
        { nombre: t('teams.team.b.name' as TranslationKeys), profesion: t('teams.team.b.profession' as TranslationKeys), imagen: Image2 },
        { nombre: t('teams.team.c.name' as TranslationKeys), profesion: t('teams.team.c.profession' as TranslationKeys), imagen: Image3 }
    ]

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const getWidth = (idx: number) => {
        if (isDesktop) return idx === currentSlide ? 650 : 250
        else return idx === currentSlide ? 585 : 192
    }

    return (
        <div ref={setRef(3)} id="Team" className="relative w-full px-5 text-center">
            {isMobileOrTablet && <div className="flex flex-col justify-center items-center text-center">
                <h1 style={{ fontSize: 42, fontWeight: 700 }}>{t('teams.title' as TranslationKeys)}</h1>

                <h3 className="text-[18px] font-semibold mb-[10px]">{t('teams.description' as TranslationKeys)}</h3>
            </div>}
            <div className="flex gap-3 relative overflow-hidden rounded-lg my-7 lg:justify-center">
                {isDesktop && <div className="h-screen flex flex-col justify-center items-center text-center lg:h-full">
                    <h1 style={{ fontSize: 64, fontWeight: 700, textAlign: 'left' }}>{t('teams.title' as TranslationKeys)}</h1>

                    <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: '20px', marginTop: '22px' }}>{t('teams.description' as TranslationKeys)}</h3>

                    <button
                        style={{ width: 202, padding: 17, borderRadius: 17, boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)" }}
                        className="text-white bg-cs-purple transition-all hover:bg-cs-purple-light hover:border hover:border-cs-gray"
                    >
                        {t('teams.buttonAction' as TranslationKeys)}
                    </button>
                </div>}

                {asesor.map((item, index) => (
                    <div key={index}>
                        <div style={{ position: 'relative', cursor: "pointer" }} onClick={() => setCurrentSlide(index)} >
                            <motion.img
                                animate={{
                                    width: getWidth(index),
                                    // height: 605,
                                    height: isMobileOrTablet ? 450 : 600,
                                    borderRadius: 17,
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                }}
                                src={item.imagen}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                className="absolute bottom-0 left-0 w-full px-5 py-5 text-white text-left"
                                animate={{
                                    borderBottomLeftRadius: '17px',
                                    borderBottomRightRadius: '17px',
                                    /* Aplica estilos solo a la imagen seleccionada */
                                    ...(index !== currentSlide && {
                                        transform: 'translateY(50%) rotate(180deg)',
                                        transformOrigin: 'center center',
                                        writingMode: 'vertical-rl',
                                        whiteSpace: 'nowrap',
                                        width: 'max-content',
                                        bottom: '50%',
                                    })
                                }}
                            >
                                <span style={{ fontSize: 44, fontWeight: 600 }}>{index === currentSlide ? item.nombre : null}</span>  <br />
                                <span style={{ fontSize: 23, fontWeight: 400 }}>{item.profesion}</span>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-1 justify-center my-4">
                {asesor.map((_, index) => (
                    <motion.div key={index} className="cursor-pointer" animate={{ width: index === currentSlide ? 94 : 42, height: 14, backgroundColor: index === currentSlide ? "#2C2949" : "rgba(37, 35, 35, 0.10)", borderRadius: 18 }} onClick={() => setCurrentSlide(index)}></motion.div>
                ))}
            </div>
            {isMobileOrTablet &&
                <button className="my-10 md:text-[20px]" style={{ width: 202, padding: 17, borderRadius: 17, color: "white", background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)", boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)" }}>
                    <a></a>
                    {t('teams.buttonAction' as TranslationKeys)}
                </button>
            }
        </div >
    );
}