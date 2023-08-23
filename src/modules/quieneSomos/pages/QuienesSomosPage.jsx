import { AppLayout } from "../../../layouts/AppLayout"
import { AstronautJump } from "../components/AstronautJump"
import { BackgroundAnimated } from "../components/background/BackgroundAnimated"
import { TarjetasQuinesSomos } from "../components/tarjetas/TarjetasQuinesSomos"
import { TeamWork } from "../components/teamWork/TeamWork"
import { Helmet } from 'react-helmet-async'


export default function QuienesSomosPage() {
  return (
    <AppLayout>
      {/* SEO */}
      <Helmet>
        <title>DMNT Creative Agency - Quienes somos?</title>
        <meta name="description" content="Inicio" />
      </Helmet>
      {/* SEO END =============================================================================== */}
      <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
        <AstronautJump />
        <BackgroundAnimated />
        <TarjetasQuinesSomos />
        <TeamWork />
      </div>
    </AppLayout>
  )
}