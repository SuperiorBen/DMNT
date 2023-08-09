import { AppLayout } from "../../../../layouts/AppLayout"
import Lottie from "lottie-react";
import stars from '../assets/animations/starsBg.json'
import astro from '../assets/animations/astro.json'
import { motion } from 'framer-motion'

export const ServicioPage = () => {
    const title = ['N', 'U', 'E', 'S', 'T', 'R', 'O', 'S', 'S', 'E', 'R', 'V', 'I', 'C', 'I', 'O', 'S']
    return (
        <AppLayout>
            <div>
                <div style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: 3, top: 0, left: 0, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                    <p style={{ fontSize: '7em', color: '#fff', fontWeight: 700, width: '5.5em', display: 'flex', flexWrap: 'wrap', lineHeight: '0.9em', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            title.map((letter, i) => <motion.span
                                initial={{ opacity: 0, translateX: -20 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 1, delay: i == 0 ? 0.1 : i * 0.1 + 0.1 }}
                                key={i}>{letter}</motion.span>)
                        }
                    </p>
                    <motion.div
                    initial={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    ><Lottie style={{ width: '20em', position: 'relative' }} animationData={astro} /></motion.div>
                    
                </div>
                <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#171623', zIndex: 1 }}>
                    <div style={{
                        background: 'radial-gradient(circle, rgb(7 193 236) 0%, rgba(9, 79, 116, 0.3) 35%, rgba(9, 79, 116, 0) 100%)',
                        position: 'absolute', top: '-55vh', left: '15vw', zIndex: 2, borderRadius: '50%', width: '70vw', height: '100vh', opacity: 0.1,
                        boxShadow: 'rgb(6 204 255 / 20%) 2px 0px 500px'
                    }}></div>
                    <div style={{
                        background: 'radial-gradient(circle, rgba(154,35,235,1) 0%, rgba(154,35,235,0.5326505602240896) 35%, rgba(0,212,255,0) 100%)',
                        position: 'absolute', top: '35vh', left: '5vw', zIndex: 2, borderRadius: '50%', width: '90vw', height: '140vh', opacity: 0.2, boxShadow: '2px 0px 500px #9a23eb75'
                    }}></div>
                    <Lottie style={{ width: '100vw', position: 'absolute', zIndex: 3 }} animationData={stars} />
                </div>
            </div>
        </AppLayout>
    )
}