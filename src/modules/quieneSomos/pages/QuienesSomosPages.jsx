import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../assets/stars-bg.webp"
import circlePurple from "../assets/carnets/bgTeamWork.png"
import { TarjetasQuinesSomos } from "../components/tarjetas/TarjetasQuinesSomos"
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import '../assets/css/styleQuienesSomos.css'
import { useState } from "react"

export const QuienesSomosPages = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    ['0vw', '-100vw', '-200vw']
  )
  const [positionCard, setPositionCard] = useState('0vw')
  useMotionValueEvent(x, "change", (latest) => {
    setPositionCard(latest)
  })

  return (
    <AppLayout>
      <div style={{ height: '400vh', width: '100vw', overflowX: 'hidden' }}>
        <div className="contentCards" style={{
          overflowX: 'hidden', width: '300vw', height: '100vh', position: 'fixed', top: 0, zIndex: 1,
          display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', left: positionCard
        }}>
          <TarjetasQuinesSomos />
        </div>
        <div style={{ width: '100vw', height: '100vh', background: 'yellow', position: 'fixed', zIndex: 1, top:'100vh' }}>
          Carnets
        </div>
        <div className="background" style={{ Height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
          <img src={circlePurple} alt="puple" style={{ height: '100vh', width: '29em', position: 'absolute', top: 0, left: "-15em", zIndex: 1, mixBlendMode: 'multiply' }} />
          <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>

      </div>
    </AppLayout>
  )
}