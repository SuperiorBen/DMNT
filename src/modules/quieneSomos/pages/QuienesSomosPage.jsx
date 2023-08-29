import { AppLayout } from "../../../layouts/AppLayout"
import {lazy } from "react"
import { Helmet } from 'react-helmet-async'

const ScrollIndicator = lazy(() => import("../../../layouts/utils/ScrollIndicator"))
const AstronautJump = lazy(() => import("../components/AstronautJump"))
const BackgroundAnimated = lazy(() => import("../components/background/BackgroundAnimated"))
const TarjetasQuinesSomos = lazy(() => import("../components/tarjetas/TarjetasQuinesSomos"))
const TeamWork = lazy(() => import("../components/teamWork/TeamWork"))


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
          <ScrollIndicator />
          <AstronautJump />
          <BackgroundAnimated />
          <TarjetasQuinesSomos />
          <TeamWork />
      </div>
    </AppLayout>
  )
}