import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { lazy } from "react";

const AstroPose = lazy(() => import("./componentsInfoSection/AstroPose"))
const BannerTitle = lazy(() => import("./componentsInfoSection/BannerTitle"))
const GifSlider = lazy(() => import("./componentsInfoSection/GifSlider"))
const MenuService = lazy(() => import("./componentsInfoSection/MenuService"))
const LinkCard = lazy(() => import("./componentsInfoSection/LinkCard"))
const StepsProcess = lazy(() => import("./componentsInfoSection/StepsProcess"))

import { cssInfo } from '../helpers/StylesInfoService'





export default function InfoSection() {
    const contentFooter = {
        position: 'relative', display: 'flex', justifyContent: 'space-evenly',
        flexDirection: window.screen.width > 900 ? 'row' : 'column',
        alignItems: 'center',
        width: window.screen.width > 1536 ? '70vw' : '100vw',
        height:'auto',
        marginTop:'2em'
    }

    return (
        <>
            {/* AstroPose Image */}
            <AstroPose />

            {/* Banner with disk */}
            <div style={cssInfo.containerBanner}>
                {/* Banner title */}
                <BannerTitle />

                <motion.div
                    initial={{ opacity: 0, y: '10vh' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={cssInfo.contentMarquee}
                >
                    <Marquee speed={5} autoFill style={cssInfo.marqueeBanner}>
                        <p style={cssInfo.titleBanner}
                        >¡Hacemos <span style={{ fontSize: '2em', fontWeight: 700 }}>realidad</span> tus ideas!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                    </Marquee>
                </motion.div>

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
