import { AppLayout } from "../../../layouts/AppLayout"
import { lazy } from "react"
import { Helmet } from 'react-helmet-async'
import ReactGA from "react-ga4";
import shareSeo from "../../../assets/shareSeo.webp";


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
      <Helmet>
        <meta charSet="utf-8" />
        <title>DMNT Creative Agency - ¿Quiénes somos? Conócenos</title>
        <meta name="description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
        <link rel="canonical" href="https://test.dmnt.com.sv/quienesSomos" />
        {/* Open graph */}
        <meta property="og:title" content="DMNT Creative Agency - ¿Quiénes somos? Conócenos" />
        <meta property="og:description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
        <meta property="og:image" content={shareSeo} />
        <meta property="og:image:width" content="369" />
        <meta property="og:image:height" content="300" />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
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