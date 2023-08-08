import Lottie from "lottie-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"
import ovni from "../assets/animations/ovni.json"
export const TitleMessage = () => {
    const widthTitle = window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '15em') : '80%'
    return (
        <>
            <motion.div 
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1 , translateY: 0}}
            transition={{ duration: 2, delay:0.8 }}
            style={{
                display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: 2,
                width: widthTitle,
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? 'calc( 40vh - 15em / 2 )' : `calc( 40vh - 7em / 2 )`) : '27em',
                left: window.screen.width > 900 ? (window.screen.width > 1536 ? `calc( 35vw - ${widthTitle} / 2 )` : `calc( 40vw - ${widthTitle} / 2 )`) : `calc( 50vw - ${widthTitle} / 2 )`, userSelect: 'none'
            }}>
                <p style={{
                    padding: '0.5em 0em', margin: '0em', lineHeight: '1em', textAlign: 'center',
                    background: '#9565fdd5', color: '#fff', fontWeight: 700, borderRadius: '5px',
                    fontSize: window.screen.width > 1536 ? '2em' :'1em'
                }}>DECÍDETE A OBTENER EL</p>
                <p style={{
                    margin: '0em', lineHeight: '0.9em', textAlign: 'center',
                    color: '#9565fdd5', fontWeight: 700,
                    fontSize: window.screen.width > 1536 ? '10em' :'5em'
                }}>ÉXITO</p>
                <p style={{
                    padding: '0.5em 0em', margin: '0em', lineHeight: '1em', textAlign: 'center',
                    background: '#9565fdd5', color: '#fff', fontWeight: 700, borderRadius: '5px',
                    fontSize: window.screen.width > 1536 ? '2em' :'1em'
                }}>¡HASTA LAS ESTRELLAS!</p>
            </motion.div>

            {
                window.screen.width > 900 && <Marquee speed={50} direction="right" style={{ position: 'fixed', zIndex: 3, width: '100vw', bottom: '20vh', userSelect: 'none' }}>
                    <Lottie style={{
                        width: window.screen.width > 1536 ? '8em' : '5em', userSelect: 'none'
                    }} animationData={ovni} />
                </Marquee>
            }

        </>
    )
}
