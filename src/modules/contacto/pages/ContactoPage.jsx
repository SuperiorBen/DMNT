import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../../../assets/stars-bg.webp"
import bgMenu from "../../../assets/backgroundMenu.svg"
import { BgBuild } from "../components/BgBuild"
import { OvniAnimate } from "../components/OvniAnimate"
import { ContactGroup } from "../components/ContactGroup"
import { TitleMessage } from "../components/TitleMessage"
import { Helmet } from 'react-helmet-async'
import ReactGA from "react-ga4";
import shareSeo from "../../../assets/shareSeo.webp";


export default function ContactoPage() {
  {/* Gtag */ }
  ReactGA.send({ hitType: "pageview", page: "/contacto", title: "Contacto" })
  return (
    <AppLayout>
      {/* SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>DMNT Creative Agency - ¡Contactanos para alcanzar tus metas!</title>
        <meta name="description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
        <link rel="canonical" href="https://test.dmnt.com.sv/contacto" />
        {/* Open graph */}
        <meta property="og:title" content="DMNT Creative Agency - ¡Contactanos para alcanzar tus metas!" />
        <meta property="og:description" content="Creamos experiencias digitales con tu marca, generando contenido de valor con un alto grado de responsabilidad y calidad. Creemos que si se puede soñar, se puede lograr" />
        <meta property="og:image" content={shareSeo} />
        <meta property="og:image:width" content="369" />
        <meta property="og:image:height" content="300" />
        <meta name="robots" content="index, follow"></meta>
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
