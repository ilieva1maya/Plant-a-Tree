import { Link } from "react-router-dom"
import Path from "../paths"

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex d-lg-none">
            <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <Link to={Path.Home} className="nav-item nav-link active">Home</Link>
                <Link to={Path.Catalog} className="nav-item nav-link">Catalog</Link>
                <Link to={Path.MyForest} className="nav-item nav-link">My Forest</Link>
                <Link to={Path.About} className="nav-item nav-link">About us</Link>
                <Link to={Path.Contributors} className="nav-item nav-link">Our Contributors</Link>
                <Link to={Path.Services} className="nav-item nav-link">Services</Link>               
                <Link to={Path.Login} className="nav-item nav-link">Login</Link>
                <Link to={Path.Register} className="nav-item nav-link">Register</Link>
                <Link to={Path.Logout} className="nav-item nav-link">Logout</Link>

                {/* Comment:
                To decide to include it or not */}
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="blog.html" className="dropdown-item">Blog Grid</a>
                        <a href="detail.html" className="dropdown-item">Blog Detail</a>
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="team.html" className="dropdown-item">The Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    </div>
                </div> */}
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
    )
}