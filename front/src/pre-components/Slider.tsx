import { useState } from "react";
import Image from './../assets/imgs/carrusel-img-1.jpeg';
import Image2 from './../assets/imgs/carrusel-img-2.jpeg';
import Image3 from './../assets/imgs/carrusel-img-3.jpeg';
import { Adviser } from "../pre-types/Adviser";

export const Slider = () => {
    const [asesor,] = useState<Adviser[]>([
        // {},
        { nombre: 'Maria Torres', profesion: "Especialista en Juridicción", imagen: Image },
        { nombre: 'Bella Fuentes', profesion: "Especialista en Juridicción", imagen: Image2 },
        { nombre: 'Martha Ventanilla', profesion: "Especialista en Juridicción", imagen: Image3 }
    ])
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === asesor.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? asesor.length - 1 : prevSlide - 1));
    };

    const prevAsesor = asesor[currentSlide === 0 ? asesor.length - 1 : currentSlide - 1]
    const nextAsesor = asesor[currentSlide === asesor.length - 1 ? 0 : currentSlide + 1]

    return (
        <div className="relative w-full max-w-md mx-auto">
            <h1 className="text-center">NUESTRO EQUIPO</h1>
            <h3 className="text-center">Encuentra tu asesor</h3>
            <div className="flex gap-1 relative overflow-hidden rounded-lg my-7 ">
                <div className="relative">
                    <img
                        src={prevAsesor.imagen}
                        style={{
                            width: 98, height: 268, borderRadius: 17, objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                        onClick={prevSlide}
                        alt={`Previous Slide`}
                        className="top-0 left-0 w-full h-full object-cover opacity-100 cursor-pointer"
                    />
                    <div
                        className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-left"
                        style={{
                            backgroundColor: "transparent",
                            borderBottomLeftRadius: '17px',
                            borderBottomRightRadius: '17px',
                            transform: ' translateY(50%) rotate(180deg)',
                            transformOrigin: 'center center',
                            writingMode: 'vertical-rl', /* Para navegadores que soporten writing-mode */
                            whiteSpace: 'nowrap',
                            width: 'max-content',
                            bottom: '50%',
                            left: '50%',
                        }}
                    >
                        {prevAsesor.profesion}
                    </div>
                </div>
                {asesor.map((item, index) => (
                    <div
                        key={index}
                        className={`relative ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <div style={{ position: 'relative' }} >
                            <img
                                style={{
                                    width: 259,
                                    height: 268,
                                    borderRadius: 17,
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                }}
                                src={item.imagen}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"

                            />
                            <div
                                className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-left"
                                style={{
                                    borderBottomLeftRadius: '17px',
                                    borderBottomRightRadius: '17px',
                                }}
                            >
                                {item.nombre}<br />
                                {item.profesion}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="relative">
                    <img
                        style={{
                            width: 98, height: 268, borderRadius: 17, objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                        src={nextAsesor.imagen}
                        alt={`Next Slide`}
                        className="top-0 left-0 w-full h-full object-cover opacity-100 cursor-pointer"
                        onClick={nextSlide}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-left"
                        style={{
                            backgroundColor: "transparent",
                            borderBottomLeftRadius: '17px',
                            borderBottomRightRadius: '17px',
                            transform: ' translateY(50%) rotate(180deg)',
                            transformOrigin: 'center center',
                            writingMode: 'vertical-rl', /* Para navegadores que soporten writing-mode */
                            whiteSpace: 'nowrap',
                            width: 'max-content',
                            bottom: '50%',

                        }}
                    >
                        {nextAsesor.profesion}
                    </div>
                </div>

            </div>
            <div className="flex gap-1 justify-center my-4">
                {asesor.map((_, index) => (
                    <div key={index} className="cursor-pointer" style={{ width: 42, height: 14, backgroundColor: index === currentSlide ? "#2C2949" : "rgba(37, 35, 35, 0.10)", borderRadius: 18 }} onClick={() => setCurrentSlide(index)}></div>
                ))}
            </div>

        </div >
    );
}