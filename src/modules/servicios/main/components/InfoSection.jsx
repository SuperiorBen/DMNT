import Marquee from "react-fast-marquee";
import { AstroPose } from "./componentsInfoSection/AstroPose";
import { BannerTitle } from "./componentsInfoSection/BannerTitle";
import { GifSlider } from "./componentsInfoSection/GifSlider";
import { cssInfo } from '../helpers/StylesInfoService'

import { MenuService } from "./componentsInfoSection/MenuService";

import avatar from "../assets/multimediaForm/lic.svg";
import { TextField } from '@mui/material';




export const InfoSection = () => {

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
        setMessage("Email is Valid");
      } else if (!regEx.test(email) && email !== "") {
        setMessage("Email is not Valid");
        setMessage("Email is Not Valid");
      } else {
        setMessage("");
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

            <div style={{ width: '30em', height: '40em', position: 'relative', top: '35em', backgroundColor: '#0094ff1c' }}>
                <div style={{ width: '30em', height: '20em', position: 'absolute', top: '0em', zIndex: 1 }}>
                    <div style={{ width: '5em', height: '10em', position: 'absolute', top: 0, left: 0, backgroundColor: '#9665FD', zIndex: 0 }} />
                    <p style={{ fontSize: '1em', fontWeight: 700, margin: 0, lineHeight: '1em', color: '#9665FD' }}>El diseño es el embajador silencioso de tu marca.</p>
                    <p style={{ fontSize: '3em', fontWeight: 700, margin: 0, lineHeight: '1em', color: '#9665FD' }}>Contáctanos</p>
                </div>
                <img src={avatar} alt="avatar" style={{ width: '20em', height: '30em', position: 'absolute', top: '0em', zIndex: 1 }} />
                <div className="Form" style={{ width: '20em', height: '30em', position: 'absolute', top: '15em', zIndex: 2 }}>
                    <TextField
                        error={}
                        label="Nombre"
                        helperText={}
                        variant="filled"
                    />
                </div>
                <div style={{ width: '20em', height: '20em', position: 'absolute', top: '0em', zIndex: 0 }}>
                    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="b" gradientTransform="rotate(270 .5 .5)">
                                <stop offset="0%" stopColor="rgba(8,199,209,0.2)" />
                                <stop offset="100%" stopColor="rgba(8,199,209,1)" />
                            </linearGradient>
                        </defs>
                        <g clipPath="url(#a)">
                            <path fill="url(#b)">
                                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                                    values="
                                M843 616q-24 116-129.5 167t-202 14.5Q415 761 302.5 743t-111-130.5Q193 500 156.5 362T273 249q153 25 245.5-32.5t156 26.5q63.5 84 128 170.5T843 616Z;
                                M844 622q-8 122-141 107.5t-236.5 89Q363 922 300.5 806t-145-211Q73 500 161 409t142-220.5q54-129.5 166-34T646.5 298Q712 346 782 423t62 199Z;
                                M772 550q-134 50-135.5 208T537 802.5Q439 689 325.5 699T243 604.5q31-104.5 48-174t36.5-236Q347 28 475 105t189 154.5q61 77.5 151.5 159T772 550Z;
                                M761 554q-113 54-159.5 84t-139 145.5q-92.5 115.5-186 31T225 615q42-115-22-246t61-171q125-40 252-89.5T735 161q92 102 115.5 220.5T761 554Z;
                            
                                M843 616q-24 116-129.5 167t-202 14.5Q415 761 302.5 743t-111-130.5Q193 500 156.5 362T273 249q153 25 245.5-32.5t156 26.5q63.5 84 128 170.5T843 616Z;"/>
                            </path>
                        </g>
                    </svg>
                </div>
            </div>

        </>
    )
}
