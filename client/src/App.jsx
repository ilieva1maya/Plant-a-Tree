import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"
import Path from "./paths"

import AuthGuard from "./components/guards/AuthGuard"
import TopBar from "./components/topBar/TopBar"
import NavBar from "./components/navbar/NavBar"
import About from "./components/aboutUs/About"
import Login from "./components/login/Login"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import JoinUs from "./components/joinUs/JoinUs"
import ContactUs from "./components/contacts/ContacUs"
import Catalog from "./components/catalog/Catalog"
import AddSpecies from "./components/addSpecies/AddSpecies"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Logout from "./components/logout/Logout"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <TopBar />
        <NavBar />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalog} element={<Catalog />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Contacts} element={<ContactUs />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />

          <Route element={<AuthGuard />}>
            <Route path={Path.AddSpecies} element={<AddSpecies />} />           
            <Route path={Path.Details} element={<Details />} />
            <Route path={Path.Edit} element={<Edit />} />            
            <Route path={Path.JoinUs} element={<JoinUs />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Route>

        </Routes>
        <Footer />
      </div >
    </AuthProvider>
  )
}

export default App