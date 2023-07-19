// Backgrounds images
import bgWhoiam from "../assets/menu/quienessomos-bg.webp";
import bgService from "../assets/menu/services-bg.webp";
import bgContact from "../assets/menu/psyco-bg.webp";

// Image into de background
import astroWhoiam from "../assets/menu/whoiam.webp";
import wallPublicity from "../assets/menu/wall.webp";
import contact from "../assets/menu/contact.webp";
export const useHoverMenu = (idHover) => {

    let item = null

      switch (idHover) {

            case 1:
                item = {
                title:'“La única manera de hacer un gran trabajo es amar lo que se hace”', 
                bg: bgService,
                imgInBg: wallPublicity,
                imgInBgStyle: {height:'auto',width:'100%'}
            }
            break;

            case 2:
                item = {
                title:'“Saber lo que hay que hacer elimina el miedo”', 
                bg: bgContact,
                imgInBg: contact,
                imgInBgStyle: {height:'auto',width:'100%',marginBottom:'20%'}
            }
            break;
      
        default:
            item ={
                title:'“No existe realidad alguna excepto en la acción”', 
                bg: bgWhoiam,
                imgInBg: astroWhoiam,
                imgInBgStyle: null
            }
            break;
      }

      


    return {
        ...item
    }
}