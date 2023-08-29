import { useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { cssBgAnimated } from "../../helpers/StyleBgAnimated"

export const BackgroundAnimated = () => {
    const [section, setSection] = useState(1)
    // Twister background control 
    const [isOpen, setOpen] = useState(false)
    // Text background animate control
    const [textAnimate, setTextAnimate] = useState(0)
    // content letter animate
    const ref = useRef(null);
    // Number of lines text control 
    const [letter, setLetter] = useState('SOBRE NOSOTROS')
    const controlTime = window.screen.width > 900 ? 6 : 1
    let textTimes = controlTime
    let textBg = []
    while (textTimes >= 0) {
        textBg.push({ title: letter })
        textTimes = --textTimes
    }

    // Letter animated funtions ===========================================================

    useEffect(() => {
        ref.current.children[textAnimate].style.color = 'rgb(150 101 253 / 80%)'
    }, [textAnimate])

    useEffect(() => {
        setOpen(false)
        const timer = setTimeout(() => {
            setOpen(true)
            section == 1 && setLetter('SOBRE NOSOTROS')
            section == 2 && setLetter('¿QUIENES SOMOS?')
            section == 3 && setLetter('')
        }, 1500);
        return () => clearTimeout(timer);
    }, [section]);

    const runTextAnimate = () => {
        ref.current.children[textAnimate].style.color = 'transparent'
        if (textAnimate < controlTime) {
            setTextAnimate(textAnimate + 1)
        } else {
            setTextAnimate(0)
        }
    }
    setTimeout(runTextAnimate, 500);
    // END Letter animated funtions ===========================================================


    // Control scroll 
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPosition = latest.toFixed(2)
        if (scrollPosition <= 0.10 && section != 1) setSection(1)
        scrollPosition > 0.10 && setSection(2)
        scrollPosition > 0.50 && setSection(3)
    })


    return (
        <div style={cssBgAnimated.backgroundContent}>
            <motion.div style={{ scaleX: scrollYProgress, ...cssBgAnimated.progressBar }} />
            <img src={cssBgAnimated.bgCreativa} alt="bgCreativa" style={cssBgAnimated.imgCreativa} />
            <motion.div
                layout transition={{ duration: 0.5 }}
                style={{ ...cssBgAnimated.contentTwister, right: isOpen ? `calc(-1 * ${cssBgAnimated.xTwister})` : 0 }}>
                <motion.img
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    src={cssBgAnimated.bgTwist} alt="twister" style={cssBgAnimated.twisterImage} />
            </motion.div>

            <motion.div layout ref={ref} transition={{ duration: 0.5 }} style={{ ...cssBgAnimated.contentText, right: isOpen ? 0 : `calc(-1 * ${cssBgAnimated.xTwister})` }}>
                {textBg.map((e, i) => <p key={i} style={cssBgAnimated.textAnimated}>{e.title}</p>)}
            </motion.div>

            <img style={cssBgAnimated.bgStarsImg} src={cssBgAnimated.bgStars} alt="Fondo estrellas" />
        </div >
    )
}
