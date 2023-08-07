// Backgrounds images
import bgWhoiam from "../assets/quienessomos-bg.webp";
// Image into de background
import astroWhoiam from "../assets/whoiam.webp";
import {cssMenu} from "../helpers/stylesMenu"
export const QuienesSomosMenu = () => {

    return(
    <div style = {{ ...cssMenu.imgContent, backgroundImage: `url(${bgWhoiam})`}}>
      <p style={cssMenu.pTitle}>“No existe realidad alguna excepto en la acción”</p>
      <img src={astroWhoiam} alt="imgInBg" style={{ ...cssMenu.imgItem}} />
    </div >
  )
}
