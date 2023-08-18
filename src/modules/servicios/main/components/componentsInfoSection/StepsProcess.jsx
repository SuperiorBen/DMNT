import number1 from "../../assets/multimediaForm/number1.svg";
import number2 from "../../assets/multimediaForm/number2.svg";
import number3 from "../../assets/multimediaForm/number3.svg";

import img1 from "../../assets/animations/listen.json";
import img2 from "../../assets/animations/forty.json";
import img3 from "../../assets/animations/winning.json";


import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
export const StepsProcess = () => {

    const [step, setStep] = useState(0)
    const position2 = window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '38em') : '100vw'
    const position3 = window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '76em') : '200vw'
    const positionSteps = ['0em', position2, position3]

    return (
        <div style={{
            width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '38em') : '100vw',
            height: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '6em') : 'auto',
            overflow: window.screen.width > 900 ? 'hidden' : 'inherit',
            position: 'relative',
            marginTop: window.screen.width > 900 ? '0em' : '-6em'
        }}>
            <div style={{
                position: 'absolute', top: window.screen.width > 900 ? 0 : '-2em',
                right: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : 'calc( 30em / 2 )') : 'calc( (100vw - 4em) / 2)', width: '8em', height: '2em', display: 'flex',
                justifyContent: 'space-evenly', alignItems: 'center', zIndex: 1
            }}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(0)} style={{ width: '1em', height: step == 0 ? '1.1em' : '1em', backgroundColor: step == 0 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 0 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(1)} style={{ width: '1em', height: step == 1 ? '1.1em' : '1em', backgroundColor: step == 1 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 1 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
                <motion.div whileInView={{ scale: [1.3, 0.9, 1] }}
                    transition={{ duration: 0.6, delay: 1 }}
                    onClick={() => setStep(2)} style={{ width: '1em', height: step == 2 ? '1.1em' : '1em', backgroundColor: step == 2 ? '#9665FD' : '#D2D9E1', border: '2px solid #9665FD', borderRadius: step == 2 ? '45%' : '50%', cursor: 'pointer', transition: '0.2s linear' }} />
            </div>

            {/* Images */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                    position: 'relative', zIndex: 0,
                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '300vw',
                    height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '18em') : 'auto',
                    display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    right: `${positionSteps[step]}`, transition: '1s ease-in-out'
                }}>

                <div
                    style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '38em') : '100vw',
                        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '18em') : 'auto',
                        display: 'flex',
                        flexDirection: window.screen.width > 900 ? 'row' : 'column',
                        justifyContent: 'center', alignItems: window.screen.width > 900 ? 'center' : 'flex-start'
                    }}>
                    <Lottie animationData={img1} style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '100vw',
                        zIndex: 1, marginTop: '-2em'
                    }} />
                    <img src={number1} alt="number1" style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '90vw',
                        zIndex: 0,
                        marginLeft: window.screen.width > 900 ? '-2em' : '5vw',
                        marginTop: window.screen.width > 900 ? '0em' : '-2em'
                    }} />
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '38em') : '100vw',
                        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '18em') : 'auto',
                        display: 'flex',
                        flexDirection: window.screen.width > 900 ? 'row' : 'column',
                        justifyContent: 'center', alignItems: window.screen.width > 900 ? 'center' : 'flex-start'
                    }}>
                    <Lottie animationData={img2} style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '100vw',
                        zIndex: 1, marginTop: '-2em'
                    }} />
                    <img src={number2} alt="number2" style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '90vw',
                        zIndex: 0,
                        marginLeft: window.screen.width > 900 ? '-2em' : '5vw',
                        marginTop: window.screen.width > 900 ? '0em' : '-2em'
                    }} />
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '38em') : '100vw',
                        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '30em' : '18em') : 'auto',
                        display: 'flex',
                        flexDirection: window.screen.width > 900 ? 'row' : 'column',
                        justifyContent: 'center', alignItems: window.screen.width > 900 ? 'center' : 'flex-start'
                    }}>
                    <Lottie animationData={img3} style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '100vw',
                        zIndex: 1, marginTop: '-2em'
                    }} />
                    <img src={number3} alt="number1" style={{
                        position: 'relative',
                        width: window.screen.width > 900 ? (window.screen.width > 1536 ? '6em' : '114em') : '90vw',
                        zIndex: 0,
                        marginLeft: window.screen.width > 900 ? '-2em' : '5vw',
                        marginTop: window.screen.width > 900 ? '0em' : '-2em'
                    }} />
                </div>
            </motion.div>
        </div>
    )
}
