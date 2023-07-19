import { Route, Routes } from "react-router-dom"
import { InicioPage } from "../modules/inicio/pages/InicioPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path= "/" element = {< InicioPage />} />
        </Routes>
  )
}

