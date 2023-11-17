import { useState } from "react";
import Image from './../assets/imgs/carrusel-img-1.jpeg';
import Image2 from './../assets/imgs/carrusel-img-2.jpeg';
import Image3 from './../assets/imgs/carrusel-img-3.jpeg';
import { Adviser } from "../pre-types/Adviser";
import { useDeviceSize } from "../hooks/Responsive";

export const Slider = () => {
    const { isDesktop, isMobileOrTablet } = useDeviceSize();
    const [asesor,] = useState<Adviser[]>([
        // {},
        { nombre: 'Maria Torres', profesion: "Especialista en Juridicción", imagen: Image },
        { nombre: 'Bella Fuentes', profesion: "Especialista en Juridicción", imagen: Image2 },
        { nombre: 'Martha Ventanilla', profesion: "Especialista en Juridicción", imagen: Image3 }
    ])
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    return (
        <div className="relative w-full px-5 text-center">
            {isMobileOrTablet && <div className="flex flex-col justify-center items-center text-center">
                <h1 style={{ fontSize: 64, fontWeight: 700 }}>NUESTRO EQUIPO</h1>

                <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: '20px' }}>Encuentra tu asesor</h3>
            </div>}
            <div className="flex gap-3 relative overflow-hidden rounded-lg my-7 ">
                {isDesktop && <div className="h-screen flex flex-col justify-center items-center text-center">
                    <h1 style={{ fontSize: 64, fontWeight: 700 }}>NUESTRO EQUIPO</h1>

                    <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: '20px' }}>Encuentra tu asesor</h3>

                    <button style={{ width: 202, padding: 17, borderRadius: 17, color: "white", background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)", boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)" }}>Agendar Cita</button>
                </div>}

                {asesor.map((item, index) => (
                    <div key={index}>
                        <div style={{ position: 'relative' }} onClick={() => setCurrentSlide(index)} >
                            <img
                                style={{
                                    minWidth: index === currentSlide ? 585 : 192,
                                    height: 605,
                                    borderRadius: 17,
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                }}
                                src={item.imagen}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute bottom-0 left-0 w-full px-5 py-5 text-white text-left"
                                style={{
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-1 justify-center my-4">
                {asesor.map((_, index) => (
                    <div key={index} className="cursor-pointer" style={{ width: index === currentSlide ? 94 : 42, height: 14, backgroundColor: index === currentSlide ? "#2C2949" : "rgba(37, 35, 35, 0.10)", borderRadius: 18 }} onClick={() => setCurrentSlide(index)}></div>
                ))}
            </div>
            {isMobileOrTablet &&
                <button className="my-10" style={{ width: 202, padding: 17, borderRadius: 17, color: "white", background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)", boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)" }}>Agendar Cita</button>
            }
        </div >
    );
}