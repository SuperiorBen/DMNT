import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../../../assets/stars-bg.webp"
import bgMenu from "../../../assets/backgroundMenu.svg"
import { BgBuild } from "../components/BgBuild"
import { OvniAnimate } from "../components/OvniAnimate"
import { ContactGroup } from "../components/ContactGroup"
import { TitleMessage } from "../components/TitleMessage"
import { Helmet } from "react-helmet";

export default function ContactoPage() {

  return (
    <AppLayout>
      {/* SEO */}
      <Helmet>
        <title>DMNT Creative Agency - Inicio</title>
        <meta name="description" content="Inicio" />
      </Helmet>
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
