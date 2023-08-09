import { AppLayout } from "../../../../layouts/AppLayout"
import { IntroSection } from "../components/IntroSection"
// import bgMenu from "../../../../assets/backgroundMenu.svg"


export const ServicioPage = () => {

    return (
        <AppLayout>
            <div style={{ height: '500vh', width: '100vw', overflowX: 'hidden' }}>
                <IntroSection />
                {/* <img src={bgMenu} alt="bgMenu" style={{ position: 'fixed', top: 0, left: '-4em', width: '18em', zIndex: 990 }} /> */}
            </div>
        </AppLayout>
    )
}