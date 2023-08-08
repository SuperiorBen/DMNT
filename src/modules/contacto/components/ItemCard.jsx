import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import texture from "../assets/cardTexture.png"

import { useState } from "react";

export const ItemCard = ({ info }) => {
    const [isOpen, setOpen] = useState(false)
    const showInfo = (e) => {
        e.preventDefault()
        setOpen(!isOpen)
    }
    return (
        <>
            <motion.div style={{
                width: window.screen.width > 1536 ? '20em' : '15em',
                height: isOpen ? window.screen.width > 1536 ? '7em' : '5em' : '3em',
                position: 'relative', transition: '0.6s'
            }}>
                <div onClick={showInfo} style={{
                    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', cursor: 'pointer', userSelect: 'none', position: 'absolute', zIndex: 2,
                    backgroundImage: `url(${texture})`, backgroundPosition: 'center', backgroundSize: '150%', borderRadius: '5px', boxSizing: 'border-box'
                    , height: window.screen.width > 1536 ? '4em' : '3em',
                    padding: '0.5em 1em'
                }}>
                    <Lottie style={{
                        width: window.screen.width > 1536 ? '3.5em' :'2.5em',
                        height: window.screen.width > 1536 ? '3.5em' :'2.5em'
                    }} animationData={info.logo} />
                    <p style={{
                        margin: '0em', fontWeight: 700, color: '#9565fdd5',
                        fontSize: window.screen.width > 1536 ? '1.5em' : '1em',
                        lineHeight: '1em'
                    }}>{info.title}</p>
                </div>

                <a href={info.link} target="_blank" rel="noreferrer" style={{
                    display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '0em', lineHeight: '1em', fontWeight: 700, color: '#fff', textShadow: '1px 1px 0px rgb(0 0 0 / 31%)',
                    width: '100%', background: 'linear-gradient(90deg, rgba(150,101,253,0.8) 0%, rgba(8,199,209,0.25) 100%)',backgroundColor: '#fff',
                    borderRadius: '3px',  opacity: isOpen ? 1 : 0, position: 'relative', zIndex: 1,
                    transition: '0.5s', textDecoration: 'none',
                    fontSize: window.screen.width > 1536 ? '1.5em' : '1em',
                    height: '2em',
                    top: isOpen ? window.screen.width > 1536 ? '2.8em' :'3em' : '0em',
                    padding: '0.5em'
                }}>{info.text}</a>

            </motion.div>
        </>
    )
}


// Props validation
ItemCard.propTypes = {
    info: PropTypes.object,
};