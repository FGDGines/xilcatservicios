import { useState } from "react"
import { Service } from "../pre-types/Service";
import { useDeviceSize } from "../hooks/Responsive";
import Image from "./amico.svg"

export const SliderText = () => {
    const { isDesktop } = useDeviceSize();
    const [service,] = useState<Service[]>([
        { name: "Poderes Notariales", description: "Es la autoridad que se da a una persona para realizar y ejecutar determinados actos jurídicos y materiales en nuestro nombre. El apoderado (persona que recibe la autoridad) no tiene que aceptar el poder, es una decisión unilateral del poderdante (persona que concede la autoridad)." },
        { name: "Poderes 1", description: "Lorem Ipsum" },
        { name: "Poderes 2", description: "Lorem Ipsum2" },
        { name: "Poderes 3", description: "Lorem Ipsum3" },
        { name: "Poderes 4", description: "Lorem Ipsum4" },
        { name: "Poderes 5", description: "Lorem Ipsum5" }
    ])
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === service.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? service.length - 1 : prevSlide - 1));
    };

    return <>
        <h1 style={{ fontSize: 40, fontWeight: 700 }} className="text-center my-3">QUE OFRECEMOS</h1>
        <h2 style={{ fontSize: 21, fontWeight: 300 }} className="text-center my-3">Selecciona tu categoria de interes y conoce mas sobre los diferentes servicios que proponemos</h2>
        <div className="flex w-full mx-auto ">
            {service.map((item, index) => (
                <div
                    key={index}
                    className={`flex relative ${index === currentSlide ? 'block' : 'hidden'} w-full m-10  ${isDesktop ? '-mb-44' : null}`}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <button className="absolute text-center top-0 left-1/2 transform -translate-x-1/2 -mt-6" style={{
                        borderRadius: 23,
                        color: "white",
                        justifyContent: "center",
                        background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)",
                        padding: 11,
                        marginTop: -20,
                    }}>Seleccionar la categoria</button>

                    <div
                        className="text-center "
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 100,
                            height: 536,
                            width: "100%",
                            borderRadius: 20,
                            backgroundColor: "#EBEBEB",
                            boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <h2 style={{ fontSize: 33, fontWeight: 700 }}>{item.name}</h2> <br />
                        <p style={{ fontSize: 16, fontWeight: 300 }}>{item.description}</p>
                    </div>
                    <button onClick={prevSlide} className="rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-3 bg-gray-800 text-white">
                        {"<"}
                    </button>
                    <button onClick={nextSlide} className="rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-3 bg-gray-800 text-white focus:outline-none">
                        {">"}
                    </button>
                    <div className="flex gap-4 justify-center absolute bottom-4 left-0 right-0">
                        {service.map((_, index) => (
                            <div key={index} className="cursor-pointer" style={{ width: 14, height: 14, backgroundColor: index === currentSlide ? "#2C2949" : "rgba(37, 35, 35, 0.10)", borderRadius: 18 }} onClick={() => setCurrentSlide(index)}></div>
                        ))}
                    </div>
                </div>
            ))}

            {isDesktop && <img src={Image} className="-mb-56 z-30 " alt="Icono" />}

        </div>
        {isDesktop && <div style={{ height: 322, background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)" }} className="w-full mb-16" />}
    </>
}