// import './App.css'

import Features from './components/Features'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MapFeature from './components/MapFeature'
import Navigation from './components/Navigation'
import Newsletter from './components/Newsletter'
import Portflio from './components/Portfolio'
import Services from './components/Services'

function App() {

    return (
        <>
            <Navigation />
            <HeroSection />
            <Footer />
            <main id="main" className="site-main">
                <Features/>
                <Services/>
                <MapFeature/>
                <Portflio/>
                <Newsletter/>
            </main>
        </>
    )
}

export default App
