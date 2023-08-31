
import { useRef } from "react";
import { motion } from "framer-motion";



import { cssGifs } from '../../helpers/StylesInfoService'
export default function GifSlider() {
    const constraintsRef = useRef(null)


    return (
        <motion.div
            initial={{ opacity: 0, y: '10vh' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            ref={constraintsRef} style={cssGifs.parentContainer}>
            <motion.div drag="x"
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                dragElastic={window.screen.width > 900 ? 0 : 0.1}
                style={cssGifs.gifsContainer}>
                {
                    cssGifs.gifList.map((image, i) => <img key={i} src={image} alt={image} style={cssGifs.imgGifStyle} />)
                }
            </motion.div>
            <div style={cssGifs.purpleBlock} />
        </motion.div>
    )
}
