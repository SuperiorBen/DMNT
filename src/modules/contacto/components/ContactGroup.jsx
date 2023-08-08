import { motion } from "framer-motion"
import { ItemCard } from "./ItemCard"
import { cssGroupC } from "../helpers/stylesContacto"

export const ContactGroup = () => {

    const infoContacts = [
        {
            title: 'Teléfono',
            text: '2239-0908',
            link: window.screen.width > 900 ? '#' : 'tel:+50322390908',
            logo: cssGroupC.phone
        },
        {
            title: 'WhatsApp',
            text: '7987-1094',
            link: 'https://wa.me/79871094',
            logo: cssGroupC.whatsapp
        },
        {
            title: 'Instagram',
            text: '@dmntcreativa',
            link: 'https://www.instagram.com/dmntcreativa/',
            logo: cssGroupC.instagram
        },
        {
            title: 'Facebook',
            text: '@DMNT Creativa Agency',
            link: 'https://www.facebook.com/dementeagencia',
            logo: cssGroupC.facebook
        },
        {
            title: 'Email',
            text: 'demente@dmnt.com.sv',
            link: 'mailto:demente@dmnt.com.sv',
            logo: cssGroupC.email
        },
        {
            title: 'Ubicación',
            text: 'Ver ubicación',
            link: 'https://www.google.com/maps/place/DMNT+Creativa+Agency/@13.6968423,-89.2059652,15z/data=!4m6!3m5!1s0x8f633166f29b0225:0x8ebeda43fd224df3!8m2!3d13.6968423!4d-89.2059652!16s%2Fg%2F11rb5_0jv5?entry=ttu',
            logo: cssGroupC.locationIcon
        }
    ]

    return (
        <>
            <div style={cssGroupC.contentCards}>
                {
                    infoContacts.map((info, i) => <motion.div
                        initial={{ opacity: 0, translateX: -50 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 1, delay: i == 0 ? 0.6 : i * 0.6 + 0.6 }}
                        key={i}>
                        <ItemCard info={info} />
                    </motion.div>)
                }
            </div>
        </>
    )
}
