import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../assets/stars-bg.webp"
import circlePurple from "../assets/carnets/bgTeamWork.png"
import { TarjetasQuinesSomos } from "../components/tarjetas/TarjetasQuinesSomos"

export const QuienesSomosPages = () => {
  return (
    <AppLayout>
      <div style={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
        <TarjetasQuinesSomos></TarjetasQuinesSomos>
        <div className="background" style={{ Height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex:0 }}>
          <img src={circlePurple} alt="puple" style={{ height: '100vh', width: '28em' , position: 'absolute', top: 0, left: 0, zIndex: 1, mixBlendMode: 'multiply' }} />
          <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
        </div>

      </div>
    </AppLayout>
  )
}