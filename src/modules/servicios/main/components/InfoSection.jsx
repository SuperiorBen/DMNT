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
                width: '100vw', height:'18em', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start',
                position: 'relative', top: '38em',
            }}>
                <LinkCard />
                <StepsProcess/>
            </div>


        </>
    )
}
