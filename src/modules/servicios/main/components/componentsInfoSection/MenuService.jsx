import { cssMenuService } from '../../helpers/StylesInfoService2'
import '../../assets/css/bannerStyle.css'
export const MenuService = () => {



    return (
        <div style={cssMenuService.contentMain}>
            <p style={cssMenuService.titleAction}>Consulta y cotiza</p>
            <div style={cssMenuService.contentMenu}>
                {/* Options =======================================================================================*/}
                {
                    cssMenuService.optionsMenu.map((option, i) => <a key={i} className={option.linkClass} style={cssMenuService.linkStyle}>
                        <p className={option.pClass} style={cssMenuService.pStyle}>{option.title}</p>
                        <div className="contentSvg" style={option.contentSvgStyle}><option.component /></div>
                        <div className="textureBtn"></div>
                    </a>)
                }
            </div>
        </div>
    )
}
