import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import { cssStepsPro } from '../../helpers/StylesInfoService3'
export default function StepsProcess() {

    const [step, setStep] = useState(0)
    const position2 = window.screen.width > 900 ? (window.screen.width > 1536 ? '40vw' : '60vw') : '100vw'
    const position3 = window.screen.width > 900 ? (window.screen.width > 1536 ? '80vw' : '120vw') : '200vw'
    const positionSteps = ['0em', position2, position3]

    return (
        <div style={cssStepsPro.contentMain}>
            <div style={cssStepsPro.contentButtons}>
                {
                    // Reuse the array to show the 3 buttons
                    positionSteps.map((e, i) => <motion.div key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [1.3, 0.9, 1] }}
                        transition={{ duration: 0.6, delay: 1 }}
                        onClick={() => setStep(i)}
                        style={{
                            ...cssStepsPro.btnStyle,
                            height: step == i ? '1.8em' : '1.5em', backgroundColor: step == i ? '#9665FD' : '#D2D9E1', borderRadius: step == i ? '45%' : '50%',
                        }} />)
                }

            </div>

            {/* Images */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ ...cssStepsPro.animationContent, right: `${positionSteps[step]}` }}>

                {
                    cssStepsPro.listAnimate.map((item, i) => <div key={i}
                        style={cssStepsPro.divAnimate}>
                        <Lottie animationData={item.img} style={cssStepsPro.lottieAnimate} />
                        <img src={item.animate} alt="number1" style={cssStepsPro.stepImage} />
                    </div>)
                }

            </motion.div>
        </div >
    )
}
