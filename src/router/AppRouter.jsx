import { Route, Routes, useLocation } from "react-router-dom"
import { InicioPage } from "../modules/inicio/pages/InicioPage"
import { QuienesSomosPage } from "../modules/quieneSomos/pages/QuienesSomosPage"
import { AnimatePresence } from "framer-motion"
import { ContactoPage } from "../modules/contacto/pages/ContactoPage"
import { ServicioPage } from "../modules/servicios/main/pages/ServicioPage"

export const AppRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={< InicioPage />} />
                <Route path="/quienesSomos" element={< QuienesSomosPage />} />
                <Route path="/contacto" element={< ContactoPage />} />
                <Route path="/servicios" element={< ServicioPage />} />
            </Routes>
        </AnimatePresence>
    )
}

