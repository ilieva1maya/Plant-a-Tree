import { Link } from "react-router-dom"
import Path from "../paths"
import { useContext } from "react"
import AuthContext from "../contexts/authContext"

export default function NavBar() {

    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
            <a href="index.html" className="navbar-brand d-flex d-lg-none">
                <h1 className="m-0 display-4 text-secondary"><span className="text-white">Plant</span>A Tree</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <Link to={Path.Home} className="nav-item nav-link active">Home</Link>
                    <Link to={Path.Catalog} className="nav-item nav-link">Catalog</Link>
                    <Link to={Path.About} className="nav-item nav-link">About us</Link>
                    <Link to={Path.Contacts} className="nav-item nav-link">Contact Us</Link>

                    {isAuthenticated && (
                        <div className="navbar-nav mx-auto py-0">
                            <Link to={Path.AddSpecies} className="nav-item nav-link">Add Species</Link>
                            <Link to={Path.MyForest} className="nav-item nav-link">My Forest</Link>
                            <Link to={Path.Contributors} className="nav-item nav-link">Our Contributors</Link>
                            <Link to={Path.JoinUs} className="nav-item nav-link">Join Us</Link>
                            <span className="nav-item nav-link">|| Hello {username}!</span>
                            <Link to={Path.Logout} className="nav-item nav-link">Logout</Link>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div className="navbar-nav mx-auto py-0">
                            <Link to={Path.Login} className="nav-item nav-link">Login</Link>
                            <Link to={Path.Register} className="nav-item nav-link">Register</Link>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    )
}