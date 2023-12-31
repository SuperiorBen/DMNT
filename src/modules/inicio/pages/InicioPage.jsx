import { AppLayout } from "../../../layouts/AppLayout"
import creativaLogo from "../assets/creativa-agency.svg";
import DEMENTElogo from "../assets/DEMENTE.svg";
import { cssInicio } from "../helpers/StyleInicio"

import { motion } from "framer-motion"
import videoSea from '../assets/bg.mp4'
import videoSeaSmall from '../assets/bgMobil.mp4'
import ReactGA from "react-ga4";
import { SeoHelmet } from "../../../layouts/utils/SeoHelmet";


const screen = window.screen.width > 900 ? true : false


export default function InicioPage() {
  {/* Gtag */ }
  ReactGA.send({ hitType: "pageview", page: "/", title: "Inicio" })
  return (
    <AppLayout>
      {/* SEO */}

      <SeoHelmet
        title="DMNT Creative Agency - ¡La mejor agencia publicitaria!"
        canonical="https://test.dmnt.com.sv/"
      />
      {/* SEO END =============================================================================== */}
      <div className="InicioPage" style={cssInicio.viewInicio}>
        {/* Titulos */}
        <div style={cssInicio.contentTitles}>


          <div style={{ width: '100%', height: '50%', position: 'relative', padding: '1em' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div style={cssInicio.dotI} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatType: "reverse", repeat: Infinity, duration: 0.4 }} />
              <p className="subtTitle1" style={cssInicio.subtitleMain}>Más allá de las buenas</p>
            </div>
            <h1 style={cssInicio.titleMain}>IDEAS</h1>
            <p style={{ ...cssInicio.subtitleMain, marginLeft: '0.3em' }}>Marketing fuera de este mundo</p>
            {window.screen.width > 900 && <motion.a
              href="/servicios" style={cssInicio.btnDesk}>VER SERVICIOS  DMNT</motion.a>}
          </div>


          <div style={{ width: '100%', height: '50%', position: 'relative' }}>
            {window.screen.width < 900 && <motion.a
              initial={{ transform: 'scale(0.98)', opacity: 0 }}
              animate={{ transform: 'scale(1)', opacity: 1 }}
              transition={{ duration: 1, ease: "linear", transform: { duration: 0.5, repeat: Infinity, repeatType: "reverse" } }}
              href="/servicios" style={cssInicio.btnMobil}>VER SERVICIOS  DMNT</motion.a>}
            <img src={DEMENTElogo} alt="DEMENTE" style={cssInicio.logoDemente} />
            <img src={creativaLogo} alt="creativa agency" style={cssInicio.logoCreativa} />
          </div>


        </div>
        {/* Marco de camara */}
        <div style={cssInicio.contentCamera}>
          <div style={cssInicio.cornerTopLeft}></div>
          <div style={cssInicio.cornerTopRight}></div>
          <div style={cssInicio.cornerBottomLeft}></div>
          <div style={cssInicio.cornerBottomRight}></div>
        </div>
        {/* Video */}
        <video style={cssInicio.video} src={screen ? videoSea : videoSeaSmall} autoPlay muted loop></video>

      </div>
    </AppLayout>
  );
}
