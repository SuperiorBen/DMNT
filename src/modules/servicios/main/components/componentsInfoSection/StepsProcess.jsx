import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import { cssStepsPro } from '../../helpers/StylesInfoService3'
export const StepsProcess = () => {

    const [step, setStep] = useState(0)
    const position2 = window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw'
    const position3 = window.screen.width > 900 ? (window.screen.width > 1536 ? '80vw' : '120vw') : '200vw'
    const positionSteps = ['0em', position2, position3]

    return (
        <div style={{
            width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw',
            height: window.screen.width > 900 ? (window.screen.width > 1536 ? '23em' : '23em') : 'auto',
            position: 'relative',
            overflowX: 'hidden',
            marginTop: window.screen.width > 900 ? '0em' : '-6em'
        }}>
            <div style={{
                position: 'absolute',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '0em' : '1em') : '-2em',
                right: window.screen.width > 900 ? (window.screen.width > 1536 ?
                    'calc( ( 40vw - 4em ) / 2 )' : 'calc( ( 60vw - 4em )  / 2 )') : 'calc( (100vw - 4em) / 2)',
                width: '8em', height: '2em', display: 'flex',
                justifyContent: 'space-evenly', alignItems: 'center', zIndex: 1
            }}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(0)} style={{ width: '1.5em', height: step == 0 ? '1.8em' : '1.5em', backgroundColor: step == 0 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 0 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(1)} style={{ width: '1.5em', height: step == 1 ? '1.8em' : '1.5em', backgroundColor: step == 1 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 1 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
                <motion.div whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(2)} style={{ width: '1.5em', height: step == 2 ? '1.8em' : '1.5em', backgroundColor: step == 2 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 2 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
            </div>

            {/* Images */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                    position: 'relative', zIndex: 0,
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '120vw' : '180vw') : '300vw',
                    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '22em' : '22em') : 'auto',
                    display: 'flex', flexDirection: 'row', justifyContent: window.screen.width > 900 ? 'flex-start' : 'center', alignItems: 'center',
                    right: `${positionSteps[step]}`, transition: '1s ease-in-out'
                }}>

                {
                    cssStepsPro.listAnimate.map((item, i) => <div key={i}
                        style={{
                            position: 'relative',
                            width: window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw',
                            height: window.screen.width > 900 ? (window.screen.width > 1536 ? '22em' : '22em') : 'auto',
                            display: 'flex',
                            flexDirection: window.screen.width > 900 ? 'row' : 'column',
                            justifyContent: 'center', alignItems: window.screen.width > 900 ? 'center' : 'flex-start'
                        }}>
                        <Lottie animationData={item.img} style={{
                            position: 'relative',
                            width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20vw' : '30vw') : '100vw',
                            zIndex: 1, marginTop: '-2em'
                        }} />
                        <img src={item.animate} alt="number1" style={{
                            position: 'relative',
                            width: window.screen.width > 900 ? (window.screen.width > 1536 ? '20vw' : '30vw') : '90vw',
                            zIndex: 0,
                            marginLeft: window.screen.width > 900 ? '-2em' : '5vw',
                            marginTop: window.screen.width > 900 ? '0em' : '-2em'
                        }} />
                    </div>)
                }

            </motion.div>
        </div >
    )
}
