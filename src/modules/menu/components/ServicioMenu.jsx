// Backgrounds images
import bgService from "../assets/services-bg.webp";
import bgServiceSmall from "../assets/services-bgSmall.webp";
// Image into de background
import wallPublicity from "../assets/wall.webp";
import wallPublicitySmall from "../assets/wallSmall.webp";
import { cssMenu } from "../helpers/stylesMenu"

const screen = window.screen.width > 900 ? true : false

export const ServicioMenu = () => {
  return (
    <div style={{ ...cssMenu.imgContent, backgroundImage: `url(${screen ? bgService : bgServiceSmall})` }}>
      <p style={cssMenu.pTitle}>“La única manera de hacer un gran trabajo es amar lo que se hace”</p>
      <img src={screen ? wallPublicity : wallPublicitySmall} alt="imgInBg" style={{ ...cssMenu.imgItem }} />
    </div >
  )
}
