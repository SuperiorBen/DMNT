const blanco = 'solid 4px  rgba(255, 255, 255, 0.7'
const widthMarco = window.screen.width > 900 ? '30%' : '45%'
const heightMarco = window.screen.width > 900 ? '50%' : '20%'
const rightMarco = window.screen.width > 900 ? '-70%' : '-55%'
const topMarco = window.screen.width > 900 ? '50%' : '80%'
const degradadoPurple = 'linear-gradient(90deg, rgba(150,101,253,0.8) 0%, rgba(150,101,253,1) 50%, rgba(150,101,253,0.8) 100%)'

const viewInicio = { width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor: '#322AA4' }

// Titulos
const contentTitles = { width: '90vw', height: '80vh', position: 'fixed', zIndex: 3, top: '7em', }
const dotI = { borderRadius: '50%', background: '#ff4147', border: '1px solid #fff9', width: '1.5em', height: '1.5em', margin: '0px 0.3em' }
const subtitleMain = { margin: 0, fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: '1.2em', lineHeight: '1.2em', color: '#fff' }
const titleMain = { margin: 0, fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: '7em', lineHeight: '0.8em', color: '#fff' }
const btnDesk = {
  textDecoration: 'none', background: degradadoPurple, color: '#fff', borderRadius: '20px',
  padding: '0.5em 1em', fontWeight: 700, border: "3px solid rgba(0,0,0,0.1)",
  boxShadow: '0px 0px 5px 1px rgba(255,255,255,0.6)', position: 'absolute', marginLeft: '0.3em',
  bottom: window.screen.width > 1536 ? '50%' : '1em'
}
const btnMobil = {
  ...btnDesk, position: 'absolute',
  bottom: '5em',
  marginLeft: '5%', textAlign: 'center', fontSize: '1.5em', width: '90%'
}
const logoDemente = { width: '80%', position: 'absolute', bottom: window.screen.width > 900 ? '5em' : '3em', zIndex: 2, margin: '0px 10%', opacity: 0.8 }
const logoCreativa = { width: '70%', position: 'absolute', bottom: '2em', zIndex: 2, margin: '0px 15%' }

// Seccion de camara
const contentCamera = {
  width: '90vw', height: window.screen.width > 900 ? '80vh' : '85vh', position: 'fixed', zIndex: 2, top: '6.2em', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)'
}
const cornerTopLeft = { width: widthMarco, height: heightMarco, borderTopLeftRadius: '5px', borderLeft: blanco, borderTop: blanco }
const cornerTopRight = { width: widthMarco, height: heightMarco, borderTopRightRadius: '5px', borderRight: blanco, borderTop: blanco, position: 'relative', right: rightMarco }
const cornerBottomLeft = { width: widthMarco, height: heightMarco, borderBottomLeftRadius: '5px', borderLeft: blanco, borderBottom: blanco, position: 'relative', top: topMarco }
const cornerBottomRight = { width: widthMarco, height: heightMarco, borderBottomRightRadius: '5px', borderRight: blanco, borderBottom: blanco, position: 'relative', right: rightMarco, top: topMarco }

const video = { width: window.screen.width > 900 ? '100vw' : 'auto', height: window.screen.width > 900 ? 'auto' : '100vh', maxWidth: '1920px', position: 'fixed', zIndex: 1 }
export const cssInicio = {
  viewInicio,
  contentTitles,
  dotI,
  subtitleMain,
  titleMain,
  btnDesk,
  btnMobil,
  logoDemente,
  logoCreativa,
  contentCamera,
  cornerTopLeft,
  cornerTopRight,
  cornerBottomLeft,
  cornerBottomRight,
  video
}