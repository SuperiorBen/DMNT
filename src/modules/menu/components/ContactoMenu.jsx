// Backgrounds images
import bgContact from "../assets/psyco-bg.webp";
// Image into de background
import contact from "../assets/contact.webp";
import {cssMenu} from "../helpers/stylesMenu"
export const ContactoMenu = () => {

    return(
    <div style = {{ ...cssMenu.imgContent, backgroundImage: `url(${bgContact})`}}>
      <p style={cssMenu.pTitle}>“Saber lo que hay que hacer elimina el miedo”</p>
      <img src={contact} alt="imgInBg" style={{ ...cssMenu.imgItem, height:'auto',width:'100%',marginBottom:'20%'}} />
    </div >
  )
}
