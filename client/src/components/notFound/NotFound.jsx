import { Link } from "react-router-dom";
import Path from "../../paths";

export default function NotFound() {   
    return (
        <div className="container-fluid p-0">
        <div className="carousel-inner">
            <img className="w-100" src="img/forest1.png" alt="Forest" />
            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-5" style={{ maxWidth: 1200 }}>
                    <h1 className="display-4 text-white mb-md-4">Page not Found
                    </h1>                    
                    <Link to={Path.Home} className="btn btn-secondary py-md-3 px-md-5">Back</Link>                        
                </div>
            </div>              
        </div>
    </div>
    )
}