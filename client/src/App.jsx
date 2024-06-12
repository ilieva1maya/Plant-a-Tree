// import './App.css'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'

function App() {

    return (
        <>
            <header id="masthead" className="site-header">
                <Navigation />               
            </header>
            <HeroSection/>
        </>
    )
}

export default App
