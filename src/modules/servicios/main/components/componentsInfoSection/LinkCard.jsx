import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import { cssLinkCard } from '../../helpers/StylesInfoService3'
import { SvgBlob } from "../svgComponents/SvgBlob";


export default function LinkCard() {
    const [isHover, setHover] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: '10vh' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={cssLinkCard.contentCard}>
            <div style={cssLinkCard.contentTitle}>
                {/* Titles */}
                <div style={cssLinkCard.texts}>
                    <p style={cssLinkCard.titleTiny}>El diseño es el embajador silencioso de tu marca.</p>
                    <p style={cssLinkCard.titleBig}>Contáctanos</p>
                </div>
                <motion.a href="#"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        ...cssLinkCard.buttonContact,
                        background: isHover ? 'rgba(150,101,253,0.6)' : 'rgba(150,101,253,0.8)',
                        boxShadow: isHover ? '0px 3px 1px rgba(150, 101, 253, 0.8)' : 'none',
                    }}>
                    <p style={{ ...cssLinkCard.buttonText, marginLeft: isHover ? '2em' : '0em' }}>Realizar consulta</p>
                    <img src={cssLinkCard.arrow} alt="arrow" style={{
                        ...cssLinkCard.arrowCss,
                        left: window.screen.width > 900 ? (window.screen.width > 1536 ? isHover ? '4em' : '-2em' : isHover ? '4em' : '-2em') : isHover ? '2em' : '-2em',
                        opacity: isHover ? 1 : 0
                    }} />
                </motion.a>
            </div>
            <Lottie style={cssLinkCard.avatarAnimate} animationData={cssLinkCard.avatar} />
            <div style={cssLinkCard.bgBlur} />
            <div style={cssLinkCard.blobAnimate}><SvgBlob /></div>
        </motion.div>
    )
}
