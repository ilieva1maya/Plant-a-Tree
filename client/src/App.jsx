import { Routes, Route } from "react-router-dom"

import TopBar from "./components/TopBar"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Footer from "./components/Footer"
import Path from "./paths"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import MyForest from "./components/MyForest"
import Contributors from "./components/Contributors"
import JoinUs from "./components/JoinUs"
import Contacts from "./components/Contacts"
import Catalog from "./components/catalog/Catalog"
import AddSpecies from "./components/AddSpecies"


function App() {

  return (

    <div id="box">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Catalog} element={<Catalog />} />
        <Route path={Path.AddSpecies} element={<AddSpecies/>}/>        
        <Route path={Path.MyForest} element={<MyForest />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Contributors} element={<Contributors />} />    
        <Route path={Path.JoinUs} element={<JoinUs />} />
        <Route path={Path.Contacts} element={<Contacts />} /> 
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register/>} />
        <Route path={Path.Logout} element={<Home />} />
      </Routes>
      <Footer />

    </div >

  )
}

export default App
