import { AppLayout } from "../../../layouts/AppLayout"
import { lazy } from "react"
import ReactGA from "react-ga4";
import { SeoHelmet } from "../../../layouts/utils/SeoHelmet";


const ScrollIndicator = lazy(() => import("../../../layouts/utils/ScrollIndicator"))
const AstronautJump = lazy(() => import("../components/AstronautJump"))
const BackgroundAnimated = lazy(() => import("../components/background/BackgroundAnimated"))
const TarjetasQuinesSomos = lazy(() => import("../components/tarjetas/TarjetasQuinesSomos"))
const TeamWork = lazy(() => import("../components/teamWork/TeamWork"))


export default function QuienesSomosPage() {
  {/* Gtag */ }
  ReactGA.send({ hitType: "pageview", page: "/quienesSomos", title: "¿Quienes somos?" })
  return (
    <AppLayout>
      {/* SEO */}
      <SeoHelmet
       title="DMNT Creative Agency - ¿Quiénes somos? Conócenos"
       canonical="https://test.dmnt.com.sv/quienesSomos"
      />
      {/* SEO END =============================================================================== */}
      <div style={{ height: '300vh', width: '100vw', overflowX: 'hidden' }}>
        <ScrollIndicator />
        <AstronautJump />
        <BackgroundAnimated />
        <TarjetasQuinesSomos />
        <TeamWork />
      </div>
    </AppLayout>
  )
}