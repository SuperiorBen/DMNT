import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../../../assets/stars-bg.webp"
import bgMenu from "../../../assets/backgroundMenu.svg"
import { BgBuild } from "../components/BgBuild"
import { OvniAnimate } from "../components/OvniAnimate"
import { ContactGroup } from "../components/ContactGroup"
import { TitleMessage } from "../components/TitleMessage"
import ReactGA from "react-ga4";
import { SeoHelmet } from "../../../layouts/utils/SeoHelmet"


export default function ContactoPage() {
  {/* Gtag */ }
  ReactGA.send({ hitType: "pageview", page: "/contacto", title: "Contacto" })
  return (
    <AppLayout>
      {/* SEO */}
      <SeoHelmet
        title="DMNT Creative Agency - ¡Contactanos para alcanzar tus metas!"
        canonical="https://test.dmnt.com.sv/contacto"
      />
      {/* SEO END =============================================================================== */}
      <TitleMessage />
      <ContactGroup />
      <OvniAnimate />
      <BgBuild />
      <img src={bgMenu} alt="bgMenu" style={{ position: 'fixed', top: 0, left: '-4em', width: '18em' }} />
      <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
    </AppLayout>
  )
}
