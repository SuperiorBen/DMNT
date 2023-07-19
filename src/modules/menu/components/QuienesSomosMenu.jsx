// Backgrounds images
import bgWhoiam from "../assets/quienessomos-bg.webp";
// Image into de background
import astroWhoiam from "../assets/whoiam.webp";
import {stylesMenu} from "../helpers/stylesMenu"
export const QuienesSomosMenu = () => {

    return(
    <div style = {{ ...stylesMenu.imgContent, backgroundImage: `url(${bgWhoiam})`}}>
      <p style={stylesMenu.pTitle}>“No existe realidad alguna excepto en la acción”</p>
      <img src={astroWhoiam} alt="imgInBg" style={{ ...stylesMenu.imgItem}} />
    </div >
  )
}
