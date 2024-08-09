import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"

import TopBar from "./components/TopBar"
import NavBar from "./components/navbar/NavBar"
import About from "./components/About"
import Footer from "./components/Footer"
import Path from "./paths"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import MyForest from "./components/MyForest"
import Contributors from "./components/Contributors"
import JoinUs from "./components/JoinUs"
import ContactUs from "./components/contacts/ContacUs"
import Catalog from "./components/catalog/Catalog"
import AddSpecies from "./components/AddSpecies"
import Details from "./components/details/Details"
import Logout from "./components/logout/Logout"


function App() {
  return (
    <AuthProvider>
      <div id="box">
        <TopBar />
        <NavBar/>
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalog} element={<Catalog />} />
          <Route path={Path.AddSpecies} element={<AddSpecies />} />
          <Route path={Path.MyForest} element={<MyForest />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Contributors} element={<Contributors />} />
          <Route path={Path.JoinUs} element={<JoinUs />} />
          <Route path={Path.Contacts} element={<ContactUs/>} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.Details} element={<Details />} />
        </Routes>
        <Footer />
      </div >
    </AuthProvider>
  )
}

export default App