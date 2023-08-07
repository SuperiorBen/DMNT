import Lottie from "lottie-react";
import { motion } from "framer-motion"
import texture from "../assets/cardTexture.png"
import phone from "../assets/animations/phone.json"
import { useState } from "react";
export const ContactGroup = () => {
    const [isOpen, setOpen] = useState(false)
    const showInfo = (e) => {
        e.preventDefault()
        setOpen(!isOpen)
    }
    return (
        <>
            <motion.div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '15em', position: 'fixed', zIndex: 6, top: '8em', left: '30em',
                backgroundImage: `url(${texture})`, backgroundPosition: 'center', backgroundSize: '150%', padding: '0.2em',
                borderRadius: '10px', backgroundRepeat: 'no-repeat', transition: '1s'
            }}>
                <div onClick={showInfo} style={{
                    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '15em',
                    height: '2em', cursor: 'pointer', userSelect: 'none',position:'relative', zIndex:2
                }}>
                    <Lottie style={{ width: '2.5em', height: '2.5em' }} animationData={phone} />
                    <p style={{ margin: '0em', fontSize: '1em', lineHeight: '1em', fontWeight: 700, color: '#9565fdd5' }}>Teléfono</p>
                </div>
                <div style={{ width: '98%', height: '2em', background: 'linear-gradient(90deg, rgba(150,101,253,0.8) 0%, rgba(8,199,209,0.25) 100%)', 
                padding: '0.5em', borderRadius: '3px', marginTop: isOpen ? '0em' : '-2em', opacity: isOpen ? 1 : 0, position:'relative', zIndex:1,
                transition: isOpen ? 'marginTop 1s, opacity 0.3s linear 0.1s' : 'marginTop 1s, opacity 0.3s linear 1s' }}>
                    <p style={{ textAlign: 'center', margin: '0em', fontSize: '1em', lineHeight: '1em', fontWeight: 700, color: '#fff', textShadow: '1px 1px 0px rgb(0 0 0 / 31%)' }}>2239-0908</p>
                </div>


            </motion.div>

        </>
    )
}
