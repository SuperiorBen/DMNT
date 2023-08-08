import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"

import { cssTMessage } from "../helpers/stylesContacto"
export const TitleMessage = () => {
    return (
        <>
            <motion.div 
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1 , translateY: 0}}
            transition={{ duration: 2, delay:0.8 }}
            style={cssTMessage.contentTitle}>
                <p style={cssTMessage.lineTiny}>DECÍDETE A OBTENER EL</p>
                <p style={cssTMessage.lineBig}>ÉXITO</p>
                <p style={cssTMessage.lineTiny}>¡HASTA LAS ESTRELLAS!</p>
            </motion.div>

            {
                window.screen.width > 900 && <Marquee speed={50} direction="right" style={cssTMessage.marqueeOvni}>
                    <Lottie style={cssTMessage.crazyOvni} animationData={cssTMessage.ovni} />
                </Marquee>
            }

        </>
    )
}
