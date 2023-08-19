import Marquee from "react-fast-marquee";
import { AstroPose } from "./componentsInfoSection/AstroPose";
import { BannerTitle } from "./componentsInfoSection/BannerTitle";
import { GifSlider } from "./componentsInfoSection/GifSlider";
import { cssInfo } from '../helpers/StylesInfoService'

import { MenuService } from "./componentsInfoSection/MenuService";
import { LinkCard } from "./componentsInfoSection/LinkCard";
import { StepsProcess } from "./componentsInfoSection/StepsProcess";



export const InfoSection = () => {
    const contentFooter = {
        position: 'relative', display: 'flex', justifyContent: 'space-evenly',
        flexDirection: window.screen.width > 900 ? 'row' : 'column',
        alignItems: window.screen.width > 900 ? 'flex-start' : 'center',
        left: window.screen.width > 1536 ? '15vw' : '0vw',
        width: window.screen.width > 1536 ? '70vw' : '100vw',
        top: window.screen.width > 900 ? (window.screen.width > 1536 ? '42em' : '38em') : '63em',
        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '26em' : '40em') : 'auto',
    }
    
    return (
        <>
            {/* AstroPose Image */}
            <AstroPose />

            {/* Banner with disk */}
            <div style={cssInfo.containerBanner}>
                {/* Banner title */}
                <BannerTitle />

                <Marquee speed={5} autoFill style={cssInfo.marqueeBanner}>
                    <p style={cssInfo.titleBanner}
                    >¡Hacemos <span style={{ fontSize: '2em', fontWeight: 700 }}>realidad</span> tus ideas!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                </Marquee>

                {/* Gif slider */}
                <GifSlider />
            </div>
            <MenuService />

            <div style={contentFooter}>
                <LinkCard />
                <StepsProcess />
            </div>


        </>
    )
}
