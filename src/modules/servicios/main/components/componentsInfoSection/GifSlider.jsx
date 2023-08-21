
import { useRef } from "react";
import { motion } from "framer-motion";



import { cssGifs } from '../../helpers/StylesInfoService'
export default function GifSlider () {
    const constraintsRef = useRef(null)
   
    
    return (
        <div ref={constraintsRef} style={cssGifs.parentContainer}>
            <motion.div drag="x"
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                dragElastic={window.screen.width > 900 ? 0 : 0.1}
                style={cssGifs.gifsContainer}>
                    {
                        cssGifs.gifList.map((image,i)=><img key={i} src={image} alt={image} style={cssGifs.imgGifStyle} />)
                    }
            </motion.div>
            <div style={cssGifs.purpleBlock} />
        </div>
    )
}
