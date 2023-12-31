import { lazy } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { ValidateService } from "./ValidateService"

const InicioPage = lazy(() => import("../modules/inicio/pages/InicioPage"))
const QuienesSomosPage = lazy(() => import("../modules/quieneSomos/pages/QuienesSomosPage"))
const ServicioPage = lazy(() => import("../modules/servicios/main/pages/ServicioPage"))
const DetailPage = lazy(() => import("../modules/servicios/detail/pages/DetailPage"))
const ContactoPage = lazy(() => import("../modules/contacto/pages/ContactoPage"))
const Page404 = lazy(() => import("../layouts/Page404"))


export const AppRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={< InicioPage />} />
                <Route path="/quienesSomos" element={< QuienesSomosPage />} />
                <Route path="/servicios" element={< ServicioPage />} />
                <Route path="/servicios/:detail" element={< ValidateService>
                    <DetailPage />
                </ ValidateService >} />
                <Route path="/contacto" element={< ContactoPage />} />
                <Route path="/*" element={< Page404 />} />
            </Routes>
        </AnimatePresence>
    )
}

