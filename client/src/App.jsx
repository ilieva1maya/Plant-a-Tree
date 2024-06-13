import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import Banner from "./components/Banner"
import About from "./components/About"
import Facts from "./components/Facts"
import Services from "./components/Services"
import Features from "./components/Features"
import Products from "./components/Products"
import Testimonial from "./components/Testimonial"
import Team from "./components/Team"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <TopBar />
      <NavBar />
      <Carousel/>
      <Banner/>
      <About/>
      <Facts/>
      <Services/>
      <Features/>
      <Products/>
      <Testimonial/>
      <Team/>
      <Blog/>
      <Footer />
      {/* <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></a> */}
    </>
  )
}

export default App
