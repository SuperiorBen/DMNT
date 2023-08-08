import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import texture from "../assets/cardTexture.png"



import { useState } from "react";

export const ItemCard = ({ info }) => {
    const [isOpen, setOpen] = useState(false)
    const showInfo = (e) => {
        e.preventDefault()
        info.link != 'N/A' && setOpen(!isOpen)
    }
    return (
        <>
            <motion.div style={{ width: '15em', height: isOpen ? '5em' : '3em', position: 'relative', transition: '1s' }}>
                <div onClick={showInfo} style={{
                    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '15em',
                    height: '3em', cursor: 'pointer', userSelect: 'none', position: 'absolute', zIndex: 2,
                    backgroundImage: `url(${texture})`, backgroundPosition: 'center', backgroundSize: '150%', padding: '0.5em 1em', borderRadius: '5px'
                }}>
                    <Lottie style={{ width: '2.5em', height: '2.5em' }} animationData={info.logo} />
                    <p style={{ margin: '0em', fontSize: '1em', lineHeight: '1em', fontWeight: 700, color: '#9565fdd5' }}>{info.title}</p>
                </div>

                <a href={info.link} target="_blank" rel="noreferrer" style={{
                    display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '0em', fontSize: '1em', lineHeight: '1em', fontWeight: 700, color: '#fff', textShadow: '1px 1px 0px rgb(0 0 0 / 31%)',
                    width: '100%', height: '2em', background: 'linear-gradient(90deg, rgba(150,101,253,0.8) 0%, rgba(8,199,209,0.25) 100%)',
                    padding: '0.5em', borderRadius: '3px', top: isOpen ? '3em' : '0em', opacity: isOpen ? 1 : 0, position: 'relative', zIndex: 1,
                    transition: '1s', textDecoration:'none'
                }}>{info.text}</a>

            </motion.div>
        </>
    )
}


// Props validation
ItemCard.propTypes = {
    info: PropTypes.object,
};