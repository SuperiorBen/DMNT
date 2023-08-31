// Backgrounds images
import bgContact from "../assets/psyco-bg.webp";
import bgContactSmall from "../assets/psyco-bgSmall.webp";
// Image into de background
import contact from "../assets/contact.webp";
import contactSmall from "../assets/contactSmall.webp";
import { cssMenu } from "../helpers/stylesMenu"

const screen = window.screen.width > 900 ? true : false

export default function ContactoMenu() {
  return (
    <div style={{ ...cssMenu.imgContent, backgroundImage: `url(${screen ? bgContact : bgContactSmall})` }}>
      <p style={cssMenu.pTitle}>“Saber lo que hay que hacer elimina el miedo”</p>
      <img src={screen ? contact : contactSmall} alt="imgInBg" style={cssMenu.imgContacto} />
    </div >
  )
}
