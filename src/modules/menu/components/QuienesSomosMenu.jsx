// Backgrounds images
import bgWhoiam from "../assets/quienessomos-bg.webp";
import bgWhoiamSmall from "../assets/quienessomos-bgSmall.webp";
// Image into de background
import astroWhoiam from "../assets/whoiam.webp";
import astroWhoiamSmall from "../assets/whoiamSmall.webp";
import { cssMenu } from "../helpers/stylesMenu"


const screen = window.screen.width > 900 ? true : false

export const QuienesSomosMenu = () => {

  return (
    <div style={{ ...cssMenu.imgContent, backgroundImage: `url(${screen ? bgWhoiam : bgWhoiamSmall})` }}>
      <p style={cssMenu.pTitle}>“No existe realidad alguna excepto en la acción”</p>
      <img src={screen ? astroWhoiam : astroWhoiamSmall} alt="imgInBg" style={{ ...cssMenu.imgItem, width:'auto' }} />


    </div >
  )
}
