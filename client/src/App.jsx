import { Routes, Route } from "react-router-dom"

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
import Path from "./paths"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/home/Home"

function App() {

  return (

    <div id="box">
      <TopBar />
      <NavBar />
      <Home/> 
      <Footer />
      {/* <Routes>
        <Route path={Path.Banner} element={<Banner />} />
        <Route path={Path.Products} element={<Products />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        </Routes> */}

        {/* <Route element={<AuthGuard />}>
        <Route path={Path.Create} element={<Create />} />
        <Route path={Path.Details} element={<Details />} />
        <Route path={Path.Edit} element={<Edit />} />
        <Route path={Path.Logout} element={<Logout />} />
      </Route> */}
     
    </div >


    // <>

   
    //   <Banner/>
    //   <About/>
    //   <Facts/>
    //   <Services/>
    //   <Features/>
    //   <Products/>
    //   <Testimonial/>
    //   <Team/>
    //   <Blog/>
    //   {/* <a href="#" className="btn btn-secondary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></a> */}
    // </>
  )
}

export default App
