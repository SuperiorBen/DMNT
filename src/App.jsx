import { AppRouter } from "./router/AppRouter.jsx"
import { AppTheme } from "./theme/AppTheme"
import { HelmetProvider } from 'react-helmet-async';



function App() {
  return (
    <HelmetProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </HelmetProvider>
  )
}

export default App
