import { Routes, Route } from "react-router-dom"

import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"
// import Carousel from "./components/Carousel"
// import Banner from "./components/Banner"
import About from "./components/About"
// import Facts from "./components/Facts"
import Services from "./components/Services"
// import Features from "./components/Features"
import Products from "./components/Products"
// import Testimonial from "./components/Testimonial"
// import Team from "./components/Team"
// import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Path from "./paths"
import Login from "./components/login/Login"
import Register from "./components/Register"
import Home from "./components/home/Home"

function App() {

  return (

    <div id="box">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Services} element={<Services />} />
        <Route path={Path.Products} element={<Products />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Logout} element={<Home />} />
      </Routes>
      <Footer />

      {/* <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i>ARROW</a> */}

    </div >

  )
}

export default App
