import { lazy } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const InicioPage = lazy( ()=> import("../modules/inicio/pages/InicioPage") )
const QuienesSomosPage = lazy( ()=> import("../modules/quieneSomos/pages/QuienesSomosPage") )
const ServicioPage = lazy( ()=> import("../modules/servicios/main/pages/ServicioPage") )
const DetailPage = lazy( ()=> import("../modules/servicios/detail/pages/DetailPage") )
const ContactoPage = lazy( ()=> import("../modules/contacto/pages/ContactoPage") )


export const AppRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={< InicioPage />} />
                <Route path="/quienesSomos" element={< QuienesSomosPage />} />
                <Route path="/servicios" element={< ServicioPage />} />
                <Route path="/servicios/:detail" element={< DetailPage />} />
                <Route path="/contacto" element={< ContactoPage />} />
            </Routes>
        </AnimatePresence>
    )
}

