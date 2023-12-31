import Lottie from "lottie-react";
import { cssIntro } from '../helpers/StylesIntroService'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from "react";
import { GalaxyBg } from "../../../../layouts/utils/GalaxyBg";


export default function IntroSection() {
    const [actions, setMove] = useState(['100vh', 1, 0])
    // Control scroll 
    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        scrollPosition < 0.07 && setMove(['100vh', 1, 0])
        scrollPosition > 0.07 && setMove(['0vh', 0, 0])
        scrollPosition > 0.1 && setMove(['0vh', 0, parseFloat(scrollPosition) * -10])
    })


    const title = ['N', 'U', 'E', 'S', 'T', 'R', 'O', 'S', 'S', 'E', 'R', 'V', 'I', 'C', 'I', 'O', 'S']
    const icons = [
        [{ icon: cssIntro.aplicaciones, title: 'Aplicaciones' },
        { icon: cssIntro.audiovisuales, title: 'Audio Visuales' },
        { icon: cssIntro.bellowtheline, title: 'Bellow The Line' }],
        [{ icon: cssIntro.branding, title: 'Branding' },
        { icon: cssIntro.diseniografico, title: 'Diseño Gráfico' },
        { icon: cssIntro.ecomerce, title: 'E-commerce' }],
        [{ icon: cssIntro.fotografia, title: 'Fotografía' },
        { icon: cssIntro.manejocampanias, title: 'Manejo Campañas' },
        { icon: cssIntro.modelado3d, title: 'Modelado 3D' }],
        [{ icon: cssIntro.relacionespublicas, title: 'Relaciones Públicas' },
        { icon: cssIntro.sitiosweb, title: 'Sitios Web' },
        { icon: cssIntro.socialmedia, title: 'Social Media' }],
    ]

    return (
        <>
            {/* Icons services */}
            <div style={{ ...cssIntro.contentBgIcons, top: `${actions[2]}em` }}>
                {
                    icons.map((items, i) => <div style={{ ...cssIntro.contentIcons, transitionDelay: `0.${i}s`, top: actions[0] }} key={i}>
                        {
                            items.map((item, i) => <div style={cssIntro.itemStyle} key={i}>
                                <img style={cssIntro.imgItem} src={item.icon} alt="item.icon" />
                                <p style={cssIntro.titleItem}>{item.title}</p>
                            </div>)
                        }
                    </div>)
                }
            </div>

            {/* Main title */}
            <div style={{ ...cssIntro.contentTitle, opacity: actions[1] }}>
                <p style={cssIntro.mainTitle}>
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
                ><Lottie style={cssIntro.astroIcon} animationData={cssIntro.astro} /></motion.div>
            </div>

            {/* BackgroundStars */}
            <GalaxyBg />
        </>
    )
}
