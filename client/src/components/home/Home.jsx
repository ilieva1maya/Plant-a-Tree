import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <div className="carousel-inner">
                <img className="w-100" src="img/forest1.png" alt="Forest" />
                <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                    <div className="text-start p-5" style={{ maxWidth: 1200 }}>
                        <h1 className="display-4 text-white mb-md-4">The Nature is beauty, the Nature is life!
                        </h1>
                        <h3 className="display-6 text-white mb-md-4">Want to plant a tree, but you never have time to?</h3>
                        <h3 className="display-6 text-white mb-md-4">With just one click buy a tree from our Catalog, and we will plant it for you!</h3>
                        <Link to={Path.Catalog} className="btn btn-secondary py-md-3 px-md-5">Catalog</Link>                        
                    </div>
                </div>              
            </div>
        </div>
    );
}