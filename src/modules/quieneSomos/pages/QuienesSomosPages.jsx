import { AppLayout } from "../../../layouts/AppLayout"
import { AstronautJump } from "../components/AstronautJump"
import { BackgroundAnimated } from "../components/background/BackgroundAnimated"
import { TarjetasQuinesSomos } from "../components/tarjetas/TarjetasQuinesSomos"
import { TeamWork } from "../components/teamWork/TeamWork"


export const QuienesSomosPages = () => {
  return (
    <AppLayout>
      <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
        <AstronautJump />
        <BackgroundAnimated />
        <TarjetasQuinesSomos />
        <TeamWork />
      </div>
    </AppLayout>
  )
}