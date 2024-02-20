import { useState } from "react";
import Image from "./chatbot-robot.svg";
import { motion } from "framer-motion";
import { Ask } from "../pre-types/Ask";
import { TranslationKeys } from "../language/type-i18n";
import { useTranslation } from "react-i18next";

export const Chatbot = ({ refs }: { refs: any}) => {
    const { t } = useTranslation<TranslationKeys>();
    // NO FUNCIONA CON STATE i18n
    // const [ask,] = useState<Ask[]>([
    //     { question: "Quienes Somos?", redirect: "Team" },
    //     { question: "Nuestro mejor servicio?", redirect: "Services" },
    //     { question: "Como te contactas con nosotros?", redirect: "Contact" },
    // ])
    const ask: Ask[] = [
        { question: t("bot.question.1" as TranslationKeys), redirect: () => refs.current[3].scrollIntoView({ behavior: 'smooth' }) },
        { question: t("bot.question.2" as TranslationKeys), redirect: () => refs.current[2].scrollIntoView({ behavior: 'smooth' }) },
        { question: t("bot.question.3" as TranslationKeys), redirect: () => refs.current[4].scrollIntoView({ behavior: 'smooth' }) },
    ]

    const [mostrarPreguntas, setMostrarPreguntas] = useState<boolean>(false);

    return (
        // <div className="fixed bottom-8 right-8 z-50">
        <div className="relative top-0 right-0 flex justify-end gap-8 w-full">
            {mostrarPreguntas ? (
                <motion.div
                    className="flex gap-3"
                    // initial={{
                    //     width: 700,
                    // }}
                    animate={{
                        // position: "absolute",
                        bottom: "calc(25%)",
                        right: "10%", // Ajusta la posición izquierda según tu diseño
                    }}> {ask.map(_ => <motion.p
                        className="hover:cursor-pointer"
                        onClick={() => {_.redirect && _.redirect()}}
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
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            // width: '260px'
                        }}>
                        {_.question}
                    </motion.p>)}
                </motion.div>
            ) : <motion.div
                className="flex flex-col gap-3"
                // initial={{
                //     width: 400,
                // }}
                animate={{
                    // position: "absolute",
                    bottom: "calc(25%)",
                    right: "10%", // Ajusta la posición izquierda según tu diseño
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
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    }}>
                    {t("bot.welcome" as TranslationKeys)}
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
