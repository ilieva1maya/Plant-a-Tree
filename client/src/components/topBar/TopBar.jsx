import { Link } from "react-router-dom";
import Path from "../../paths";

export default function TopBar() {
    return (
        <div className="container-fluid px-5 d-none d-lg-block">
            <div className="row gx-5 py-3 align-items-center">
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-start">
                        <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                        <h2 className="mb-0">+359 2 987 65 43</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center justify-content-center">

                        <Link to={Path.Home} className="navbar-brand ms-lg-5">                           
                            <h1 className="m-0 display-4 text-primary">Plant<span className="text-secondary"> a </span>Tree</h1>
                        </Link>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="d-flex align-items-center justify-content-end">
                        <a className="btn btn-primary btn-square rounded-circle me-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-primary btn-square rounded-circle me-2" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-primary btn-square rounded-circle" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}