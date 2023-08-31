import { AppRouter } from "./router/AppRouter.jsx"
import { AppTheme } from "./theme/AppTheme"
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";

ReactGA.initialize("G-Y6FE2DHV1N");

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
