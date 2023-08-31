
import { motion } from "framer-motion";
import { cssBanner } from '../../helpers/StylesInfoService'
export default function BannerTitle() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={cssBanner.purpleBanner}>
            <div style={cssBanner.titleContainer}>
                <p style={{ ...cssBanner.textBanner, fontSize: '3em' }}>AGENCIA DE MARKETING</p>
                <p style={{ ...cssBanner.textBanner, fontSize: '4.7em' }}>DIGITAL</p>
            </div>

            <div style={cssBanner.diskContainer}>
                <motion.img
                    initial={{ rotate: -720 }}
                    animate={{ rotate: 0 }}
                    transition={{ repeat: Infinity, duration: 10, ease: 'linear', repeatDelay: 0 }}
                    src={cssBanner.disk} alt="disk" style={cssBanner.diskStyle} />
                <img src={cssBanner.diskText} alt="diskText" style={cssBanner.diskLetters} />
            </div>
        </motion.div>
    )
}
