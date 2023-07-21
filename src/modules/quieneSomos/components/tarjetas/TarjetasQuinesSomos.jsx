import bgQuienesSomos from '../../assets/tarjetas/psyco-patron2.webp'
import '../../assets/css/styleQuienesSomos.css'
export const TarjetasQuinesSomos = () => {
  return (
    <div style={{width:'100vw',height:'100vh', position:'relative',top:0,left:0, zIndex:1, display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{
            width:'20em',
            height:'40em',
            backgroundImage:`url(${bgQuienesSomos})`,
            backgroundPosition:'center',
            backgroundSize:'225%',
            backgroundRepeat:'no-repeat',
            borderRadius:'5px',
            boxShadow:'3px 3px 5px #00000061',
            position:'relative'
        }}>
            <div className='astronaut'/>
        </div>
    </div>
  )
}
