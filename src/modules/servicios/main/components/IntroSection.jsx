import Lottie from "lottie-react";
import { cssIntro } from '../helpers/StylesMainService'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from "react";


export const IntroSection = () => {
    const [actions, setMove] = useState(['100vh', 1])
    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.1 && setMove(['100vh', 1])
        scrollPosition > 0.1 && setMove(['0vh', 0])
    })


    const title = ['N', 'U', 'E', 'S', 'T', 'R', 'O', 'S', 'S', 'E', 'R', 'V', 'I', 'C', 'I', 'O', 'S']
    const icons = [
        [{ icon: cssIntro.aplicaciones, title: 'Aplicaciones' },
        { icon: cssIntro.audiovisuales, title: 'Audio Visuales' },
        { icon: cssIntro.bellowtheline, title: 'Bellow The Line' }],
        [{ icon: cssIntro.branding, title: 'Branding' },
        { icon: cssIntro.diseniografico, title: 'Diseño Gráfico' },
        { icon: cssIntro.ecomerce, title: 'Ecomerce' }],
        [{ icon: cssIntro.fotografia, title: 'Fotografía' },
        { icon: cssIntro.manejocampanias, title: 'Manejo Campañas' },
        { icon: cssIntro.modelado3d, title: 'Modelado 3D' }],
        [{ icon: cssIntro.relacionespublicas, title: 'Relaciones Públicas' },
        { icon: cssIntro.sitiosweb, title: 'Sitios Web' },
        { icon: cssIntro.socialmedia, title: 'Social Media' }],
    ]

    return (
        <>
            <div style={{
                width: '100vw', height: '100vh', position: 'fixed', zIndex: 2, top: 0, left: 0, display: 'flex', justifyContent: 'space-evenly',
                alignItems: 'flex-start', flexDirection: window.screen.width > 900 ? 'row' : 'column'
            }}>

                {
                    icons.map((items, i) => <div style={{
                        transition: '1s ease-in-out', transitionDelay: `0.${i}s`, position: 'relative',
                        top: actions[0],
                        height: window.screen.width > 900 ? '100vh' : 'auto',
                        width: window.screen.width > 900 ? 'auto' : '100vw',
                        display: 'flex',
                        flexDirection: window.screen.width > 900 ? 'column' : 'row',
                        justifyContent: 'space-evenly', alignItems: 'center'
                    }} key={i}>
                        {
                            items.map((item, i) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} key={i}>
                                <img style={{
                                    width: window.screen.width > 900 ? (window.screen.width > 1536 ? '12em' : '10em') : '7em'
                                }} src={item.icon} alt="item.icon" />
                                <p style={{
                                    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '1.5em' : '1em') : '0.8em'
                                    , fontWeight: 700, margin: '0em', color: '#fff'
                                }}>{item.title}</p>
                            </div>)
                        }
                    </div>)
                }
            </div>


            <div style={{
                transition: '1s ease-in-out', opacity: actions[1], width: '100vw', height: '100vh', position: 'fixed', zIndex: 3,
                top: 0, left: 0, display: 'flex', flexDirection: window.screen.width > 900 ? 'row' : 'column-reverse', justifyContent: 'center', alignItems: 'center'
            }}>
                <p style={{
                    fontSize: window.screen.width > 900 ? (window.screen.width > 1536 ? '8em' : '5em') : '4em',
                    color: '#fff', fontWeight: 700, width: '5.5em', display: 'flex', flexWrap: 'wrap', lineHeight: '0.9em', justifyContent: 'center', alignItems: 'center'
                }}>
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
                ><Lottie style={{
                    width: '20em', position: 'relative',
                    marginLeft: window.screen.width > 900 ? '-2em' : '2em', marginBottom: window.screen.width > 900 ? '0em' : '-5em'
                }} animationData={cssIntro.astro} /></motion.div>

            </div>

            <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#171623', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, translateY: -50 }}
                    animate={{ opacity: 0.2, translateY: 0 }}
                    transition={{ duration: 3, delay: 1 }}
                    style={{
                        background: 'radial-gradient(circle, rgb(7 193 236) 0%, rgba(9, 79, 116, 0.3) 35%, rgba(9, 79, 116, 0) 100%)',
                        position: 'absolute', top: '-50vh', left: '15vw', zIndex: 2, borderRadius: '50%', width: '70vw', height: '100vh',
                        boxShadow: 'rgb(6 204 255 / 20%) 2px 0px 500px'
                    }}></motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 0.3, translateY: 0 }}
                    transition={{ duration: 3, delay: 1 }}
                    style={{
                        background: 'radial-gradient(circle, rgba(154,35,235,1) 0%, rgba(154,35,235,0.5326505602240896) 35%, rgba(0,212,255,0) 100%)',
                        position: 'absolute', top: '35vh', left: window.screen.width > 900 ? '5vw' : '-20vw', zIndex: 2, borderRadius: '50%', width: window.screen.width > 900 ? '90vw' : '140vw', height: '140vh', boxShadow: '2px 0px 500px #9a23eb75'
                    }}></motion.div>
                <Lottie style={{ width: '100vh', position: 'absolute', zIndex: 3, transform: 'rotateZ(90deg)', top: '11em', left: '-12em' }} animationData={cssIntro.stars} />
            </div>
        </>
    )
}
