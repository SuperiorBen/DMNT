// Backgrounds images
import bgService from "../assets/services-bg.webp";
// Image into de background
import wallPublicity from "../assets/wall.webp";
import {cssMenu} from "../helpers/stylesMenu"
export const ServicioMenu = () => {

    return(
    <div style = {{ ...cssMenu.imgContent, backgroundImage: `url(${bgService})`}}>
      <p style={cssMenu.pTitle}>“La única manera de hacer un gran trabajo es amar lo que se hace”</p>
      <img src={wallPublicity} alt="imgInBg" style={{ ...cssMenu.imgItem}} />
    </div >
  )
}
