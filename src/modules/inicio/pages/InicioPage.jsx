import { AppLayout } from "../../../layouts/AppLayout"
import  videoSea  from '../assets/bg.mp4'

export const InicioPage = () => {
  return (
    <AppLayout>
    <div style={{
      width:'100vw', height:'100vh', display:'flex', justifyContent:'center',alignItems:'center',overflow:'hidden'
    }}>
      <video src={videoSea} autoPlay muted loop></video>
    </div>
    </AppLayout>
  )
}
