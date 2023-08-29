import { Suspense, lazy } from "react";
import Marquee from "react-fast-marquee";


const AstroPose = lazy(() => import("./componentsInfoSection/AstroPose"))
const BannerTitle = lazy(() => import("./componentsInfoSection/BannerTitle"))
const GifSlider = lazy(() => import("./componentsInfoSection/GifSlider"))
const MenuService = lazy(() => import("./componentsInfoSection/MenuService"))
const LinkCard = lazy(() => import("./componentsInfoSection/LinkCard"))
const StepsProcess = lazy(() => import("./componentsInfoSection/StepsProcess"))

import { cssInfo } from '../helpers/StylesInfoService'




export default function InfoSection () {
    const contentFooter = {
        position: 'relative', display: 'flex', justifyContent: 'space-evenly',
        flexDirection: window.screen.width > 900 ? 'row' : 'column',
        alignItems: window.screen.width > 900 ? 'flex-start' : 'center',
        left: window.screen.width > 1536 ? '15vw' : '0vw',
        width: window.screen.width > 1536 ? '70vw' : '100vw',
        top: window.screen.width > 900 ? (window.screen.width > 1536 ? '42em' : '38em') : '65em',
        height: window.screen.width > 900 ? (window.screen.width > 1536 ? '26em' : '40em') : 'auto',
    }

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
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
        </Suspense >
    )
}
