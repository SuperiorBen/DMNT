import { Route, Routes, useLocation } from "react-router-dom"
import { InicioPage } from "../modules/inicio/pages/InicioPage"
import { QuienesSomosPages } from "../modules/quieneSomos/pages/QuienesSomosPages"
import { AnimatePresence } from "framer-motion"
import { ContactoPage } from "../modules/contacto/pages/ContactoPage"

export const AppRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={< InicioPage />} />
                <Route path="/quienesSomos" element={< QuienesSomosPages />} />
                <Route path="/contacto" element={< ContactoPage />} />
            </Routes>
        </AnimatePresence>
    )
}

