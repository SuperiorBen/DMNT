import Marquee from "react-fast-marquee";
import { AstroPose } from "./componentsInfoSection/AstroPose";
import { BannerTitle } from "./componentsInfoSection/BannerTitle";
import { GifSlider } from "./componentsInfoSection/GifSlider";
import { cssInfo } from '../helpers/StylesInfoService'

import { MenuService } from "./componentsInfoSection/MenuService";
import { LinkCard } from "./componentsInfoSection/LinkCard";
import { StepsProcess } from "./componentsInfoSection/StepsProcess";



export const InfoSection = () => {
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

            <div style={{
                position: 'relative', display: 'flex',
                flexDirection: window.screen.width > 900 ? 'row' : 'column',
                justifyContent: 'space-evenly',
                alignItems: window.screen.width > 900 ? 'flex-start' : 'center',
                top: window.screen.width > 900 ? (window.screen.width > 1536 ? '38em' : '38em') : '63em',
                width: '100vw',
                height: window.screen.width > 900 ? (window.screen.width > 1536 ? '18em' : '18em') : 'auto',
            }}>
                <LinkCard />
                <StepsProcess />
            </div>


        </>
    )
}
