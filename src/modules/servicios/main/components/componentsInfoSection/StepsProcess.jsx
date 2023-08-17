import number1 from "../../assets/multimediaForm/number1.svg";
import number2 from "../../assets/multimediaForm/number2.svg";
import number3 from "../../assets/multimediaForm/number3.svg";

import img1 from "../../assets/multimediaForm/listen.svg";
import img2 from "../../assets/multimediaForm/forty.svg";
import img3 from "../../assets/multimediaForm/winning.svg";

import { motion } from "framer-motion";
import { useState } from "react";
export const StepsProcess = () => {

    const [step, setStep] = useState(0)
    const positionSteps = ['0em', '38em', '76em']

    return (
        <div style={{ width: '38em', height: '18em', overflow: 'hidden', position: 'relative' }}>
            <div style={{
                position: 'absolute', top: 0, right: 'calc( 30em / 2 )', width: '8em', height: '2em', display: 'flex',
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
                    position: 'relative', zIndex: 0, width: '114em', height: '18em', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    right: `${positionSteps[step]}`, transition: '1s ease-in-out'
                }}>
                <div
                    style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img1} alt="img1" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                    <img src={number1} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
                </div>

                <div
                    style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img2} alt="img2" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                    <img src={number2} alt="number2" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
                </div>

                <div
                    style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img3} alt="img1" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                    <img src={number3} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
                </div>
            </motion.div>
        </div>
    )
}
