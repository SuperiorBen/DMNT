import { AppLayout } from "../../../layouts/AppLayout"
import bgStars from "../../../assets/stars-bg.webp"
import bgMenu from "../assets/backgroundMenu.svg"
import { BgBuild } from "../components/BgBuild"
import { OvniAnimate } from "../components/OvniAnimate"
import { ContactGroup } from "../components/ContactGroup"

export const ContactoPage = () => {
  return (
    <AppLayout>

      <div style={{ display: 'flex', flexDirection: 'column', width: '15em', position: 'fixed', zIndex: 6, top: '8em', left: '10em' }}>
        <p style={{
          padding: '0.5em 0em', margin: '0em', lineHeight: '1em', textAlign: 'center',
          background: '#9565fdd5', color: '#fff', fontSize: '1em', fontWeight: 700, borderRadius: '5px'
        }}>DECÍDETE A OBTENER EL</p>
        <p style={{
          margin: '0em', lineHeight: '0.9em', textAlign: 'center',
          color: '#9565fdd5', fontSize: '5em', fontWeight: 700
        }}>ÉXITO</p>
        <p style={{
          padding: '0.5em 0em', margin: '0em', lineHeight: '1em', textAlign: 'center',
          background: '#9565fdd5', color: '#fff', fontSize: '1em', fontWeight: 700, borderRadius: '5px'
        }}>¡HASTA LAS ESTRELLAS!</p>
      </div>

      <ContactGroup />

      <OvniAnimate />
      <BgBuild />
      <img src={bgMenu} alt="bgMenu" style={{ position: 'fixed', top: 0, left: '-4em', width: '18em' }} />
      <img style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.2 }} src={bgStars} alt="Fondo estrellas" />
    </AppLayout>
  )
}
