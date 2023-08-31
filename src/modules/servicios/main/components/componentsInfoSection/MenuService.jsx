import { cssMenuService } from '../../helpers/StylesInfoService2'
import '../../assets/css/bannerStyle.css'
import { motion } from "framer-motion";

export default function MenuService() {
    return (
        <motion.div
            initial={{ opacity: 0, y: '10vh' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={cssMenuService.contentMain}>
            <p style={cssMenuService.titleAction}>Consulta y cotiza</p>
            <div style={cssMenuService.contentMenu}>
                {/* Options =======================================================================================*/}
                {
                    cssMenuService.optionsMenu.map((option, i) => <a href={option.url} key={i} className={option.linkClass} style={cssMenuService.linkStyle}>
                        <p className={option.pClass} style={cssMenuService.pStyle}>{option.title}</p>
                        <div className="contentSvg" style={option.contentSvgStyle}><option.component /></div>
                        <div className="textureBtn"></div>
                    </a>)
                }
            </div>
        </motion.div>
    )
}
