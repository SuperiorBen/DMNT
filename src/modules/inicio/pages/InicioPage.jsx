import { AppLayout } from "../../../layouts/AppLayout"
import  videoSea  from '../assets/bg.mp4'
import creativaLogo from "../assets/creativa-agency.svg";

export const InicioPage = () => {
  return (
    <AppLayout>
    <div className="InicioPage" style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center',alignItems:'center',overflow:'hidden', backgroundColor:'#322AA4'}}>
      <div className="contenTitles" style={{width:'90vw', height:'80vh', position:'fixed', zIndex:3, top:'7em',}}>
          <div style={{width:'100%', height:'50%', position:'relative',bottom:'-50%'}}>
              <p style={{margin:0,fontSize:'18em',lineHeight:'1em', fontFamily:"'Roboto', sans-serif", fontWeight:'bold', WebkitTextStroke:'2px rgba(255, 255, 255, 0.8)', color:'#fff0', 
              position:'absolute',bottom:'0.05em',zIndex:1, width:'100%',textAlign:'center'}}>DEMENTE</p>
              <img src={creativaLogo} alt="creativa agency" style={{width:'70%', position:'absolute',bottom:'2em',zIndex:2,margin:'0px 15%'}}/>
          </div>
      </div>
      <div style={{width:'90vw', height:'80vh', position:'fixed', zIndex:2, top:'7em', display:'grid', gridTemplateColumns:'repeat(2, 1fr)',
    gridTemplateRows:'repeat(2, 1fr)'}}>
        <div style={{width:'30%', height:'50%', borderTopLeftRadius:'30px', borderLeft:'solid 4px #fff', borderTop:'solid 4px #fff'}}></div>
        <div style={{width:'30%', height:'50%', borderTopRightRadius:'30px', borderRight:'solid 4px #fff', borderTop:'solid 4px #fff',position:'relative',right:'-70%'}}></div>
        <div style={{width:'30%', height:'50%', borderBottomLeftRadius:'30px', borderLeft:'solid 4px #fff', borderBottom:'solid 4px #fff',position:'relative',top:'50%'}}></div>
        <div style={{width:'30%', height:'50%', borderBottomRightRadius:'30px', borderRight:'solid 4px #fff', borderBottom:'solid 4px #fff',position:'relative',right:'-70%',top:'50%'}}></div>
      </div>
      <video style={{width:'100vw', maxWidth:'1920px', position:'fixed', zIndex:1}} src={videoSea} autoPlay muted loop></video>
    </div>
    </AppLayout>
  )
}
