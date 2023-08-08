import PropTypes from 'prop-types';
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import { useState } from "react";
import { cssItemC } from "../helpers/stylesContacto"

export const ItemCard = ({ info }) => {
    const [isOpen, setOpen] = useState(false)
    const showInfo = (e) => {
        e.preventDefault()
        setOpen(!isOpen)
    }
    return (
        <>
            <motion.div style={{
                ...cssItemC.contentCard,
                height: isOpen ? window.screen.width > 1536 ? '7em' : '5em' : '3em'
            }}>
                <div onClick={showInfo} style={cssItemC.titleCard}>
                    <Lottie style={cssItemC.icon} animationData={info.logo} />
                    <p style={cssItemC.titleText}>{info.title}</p>
                </div>

                <a href={info.link} target="_blank" rel="noreferrer" style={{
                    ...cssItemC.linkText,
                    opacity: isOpen ? 1 : 0,
                    top: isOpen ? window.screen.width > 1536 ? '2.8em' : '3em' : '0em'
                }}>{info.text}</a>
            </motion.div>
        </>
    )
}


// Props validation
ItemCard.propTypes = {
    info: PropTypes.object,
};