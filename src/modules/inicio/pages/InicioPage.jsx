import { AppLayout } from "../../../layouts/AppLayout"
import videoSea from '../assets/bg.mp4'
import creativaLogo from "../assets/creativa-agency.svg";
import DEMENTElogo from "../assets/DEMENTE.svg";
import { cssInicio } from "../helpers/StyleInicio"

import { motion } from "framer-motion"


export default function InicioPage() {

  return (
    <AppLayout>
      <div className="InicioPage" style={cssInicio.viewInicio}>
        {/* Titulos */}
        <div style={cssInicio.contentTitles}>
          <div style={{ width: '100%', height: '50%', position: 'relative', padding: '1em' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div style={cssInicio.dotI} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeatType: "reverse", repeat: Infinity, duration: 0.4 }} />
              <p className="subtTitle1" style={cssInicio.subtitleMain}>Más allá de las buenas</p>
            </div>
            <p style={cssInicio.titleMain}>IDEAS</p>
            <p style={{ ...cssInicio.subtitleMain, marginLeft: '0.3em' }}>Marketing fuera de este mundo</p>
            {window.screen.width > 900 && <a href="/" style={cssInicio.btnDesk}>VER SERVICIOS  DMNT</a>}
          </div>
          <div style={{ width: '100%', height: '50%', position: 'relative' }}>
            {window.screen.width < 900 && <a href="/" style={cssInicio.btnMobil}>VER SERVICIOS  DMNT</a>}
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
        <video style={cssInicio.video} src={videoSea} autoPlay muted loop></video>
      </div>
    </AppLayout>
  );
}
