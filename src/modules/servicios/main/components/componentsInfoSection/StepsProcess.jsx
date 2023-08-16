import number1 from "../../assets/multimediaForm/number1.svg";
import number2 from "../../assets/multimediaForm/number2.svg";
import number3 from "../../assets/multimediaForm/number3.svg";

import img1 from "../../assets/multimediaForm/listen.svg";
import img2 from "../../assets/multimediaForm/forty.svg";
import img3 from "../../assets/multimediaForm/winning.svg";

import { motion } from "framer-motion";
export const StepsProcess = () => {
    return (
        <div style={{ width: '38em', height: '18em', overflow: 'hidden'}}>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img1} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                <img src={number1} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img2} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                <img src={number2} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', width: '38em', height: '18em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img3} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 1, marginTop: '-2em' }} />
                <img src={number3} alt="number1" style={{ position: 'relative', width: '20em', zIndex: 0, marginLeft: '-2em' }} />
            </motion.div>
        </div>
    )
}
