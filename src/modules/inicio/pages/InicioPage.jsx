import { AppLayout } from "../../../layouts/AppLayout"
import videoSea from '../assets/bg.mp4'
import creativaLogo from "../assets/creativa-agency.svg";
import DEMENTElogo from "../assets/DEMENTE.svg";
import { stylesInicio } from "../helpers/StyleInicio"

import { motion } from "framer-motion"


export const InicioPage = () => {
  
  return (
    <AppLayout>
      <div className="InicioPage" style={stylesInicio.viewInicio}>
        {/* Titulos */}
        <div style={stylesInicio.contentTitles}>
          <div style={{ width: '100%', height: '50%', position: 'relative', padding: '1em' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div style={stylesInicio.dotI} initial={{opacity:0}} animate={{ opacity:1 }} transition={{ repeat: Infinity, duration: 1 }} />
              <p className="subtTitle1" style={stylesInicio.subtitleMain}>Más allá de las buenas</p>
            </div>
            <p style={stylesInicio.titleMain}>IDEAS</p>
            <p style={{ ...stylesInicio.subtitleMain, marginLeft: '0.3em'}}>Marketing fuera de este mundo</p>
            {
              window.screen.width > 900 && <a href="/" style={stylesInicio.btnDesk}>VER SERVICIOS  DMNT</a>
            }
          </div>
          <div style={{ width: '100%', height: '50%', position: 'relative' }}>
            {
              window.screen.width < 900 && <a href="/" style={stylesInicio.btnMobil}>VER SERVICIOS  DMNT</a>
            }
            <img src={DEMENTElogo} alt="DEMENTE" style={stylesInicio.logoDemente} />
            <img src={creativaLogo} alt="creativa agency" style={stylesInicio.logoCreativa} />
          </div>
        </div>
        {/* Marco de camara */}
        <div style={stylesInicio.contentCamera}>
          <div style={stylesInicio.cornerTopLeft}></div>
          <div style={stylesInicio.cornerTopRight}></div>
          <div style={stylesInicio.cornerBottomLeft}></div>
          <div style={stylesInicio.cornerBottomRight}></div>
        </div>
        {/* Video */}
        <video style={stylesInicio.video} src={videoSea} autoPlay muted loop></video>
      </div>
    </AppLayout>
  )
}
