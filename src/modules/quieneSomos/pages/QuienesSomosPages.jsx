import { AppLayout } from "../../../layouts/AppLayout"
import { AstronautJump } from "../components/AstronautJump"
import { BackgroundAnimated } from "../components/background/BackgroundAnimated"
import { TarjetasQuinesSomos } from "../components/tarjetas/TarjetasQuinesSomos"




export const QuienesSomosPages = () => {

 

  return (
    <AppLayout>
      <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>

        <AstronautJump />

        <TarjetasQuinesSomos/>

        <BackgroundAnimated />

      </div>
    </AppLayout>
  )
}