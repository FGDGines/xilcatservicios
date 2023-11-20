import { useState } from "react";
import Image from "./chatbot-robot.svg";
import { motion } from "framer-motion";
import { Ask } from "../pre-types/Ask";

export const Chatbot = () => {
    const [ask,] = useState<Ask[]>([
        { question: "Quienes Somos?", redirect: "Team" },
        { question: "Nuestro mejor servicio?", redirect: "Services" },
        { question: "Como te contactas con nosotros?", redirect: "Contact" },
    ])
    const [mostrarPreguntas, setMostrarPreguntas] = useState<boolean>(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {mostrarPreguntas ? (
                <motion.div
                    className="flex flex-col gap-3"
                    initial={{
                        width: 410,
                    }}
                    animate={{
                        position: "absolute",
                        bottom: "calc(25%)",
                        left: "-450px", // Ajusta la posición izquierda según tu diseño
                    }}> {ask.map(_ => <motion.a
                        href={"#" + _.redirect}
                        initial={{
                            fontSize: 23,
                            fontWeight: 400,
                        }}
                        animate={{
                            height: 83,
                            borderRadius: 27,
                            borderBottomRightRadius: 0,
                            backgroundColor: "#DEDEDE",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        {_.question}
                    </motion.a>)}
                </motion.div>
            ) : <motion.div
                className="flex flex-col gap-3"
                initial={{
                    width: 410,
                }}
                animate={{
                    position: "absolute",
                    bottom: "calc(25%)",
                    left: "-450px", // Ajusta la posición izquierda según tu diseño
                }}> <motion.div
                    initial={{
                        fontSize: 23,
                        fontWeight: 400,
                    }}
                    onClick={() => setMostrarPreguntas(!mostrarPreguntas)}
                    animate={{
                        height: 83,
                        borderRadius: 27,
                        borderBottomRightRadius: 0,
                        backgroundColor: "#DEDEDE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    Hola ¿Como podemos ayudarte?
                </motion.div>
            </motion.div>
            }

            <button
                className="rounded-full bg-white text-white flex items-center justify-center shadow-md"
                style={{
                    width: 134,
                    height: 134,
                    boxShadow: "0px 14px 44px 0px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => setMostrarPreguntas(!mostrarPreguntas)}>
                <img src={Image} className={mostrarPreguntas ? "animate-bounce" : ""} alt="Icono" />
            </button>
        </div >
    );
};
