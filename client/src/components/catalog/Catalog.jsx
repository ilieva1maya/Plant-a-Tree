import { useEffect, useState } from "react";
import * as speciesService from "../../services/speciesService"
import SpeciesItem from "./SpeciesItem";

export default function Catalog() {

    const [species, setSpecies] = useState([]);

    useEffect(() => {
        speciesService.getAll()
            .then(result => setSpecies(result));
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 800 }}>
                    <h3>Please choose from the <span className="text-primary text-uppercase">trees</span> listed below</h3>
                </div>
                {/* <div className="owl-carousel product-carousel px-5"> */}
                <div>

                    {species.map(tree => (
                        <SpeciesItem key={tree._id}{...tree} />
                    ))}

                    {species.length === 0 && (<h3 className="">Sorry, we do not have trees in our catalog. Be the first to add</h3>)}

                    {/* <div className="pb-5">
                        <h3 className="mb-3"> <span className="text-secondary text-uppercase">Ginkgo biloba</span>, superb in every season</h3>
                        <img className="img-fluid mb-4" src="img/ginkgo.png" alt="GinkgoBilobaTree" />

                        <h4 className="mb-4">The Ginkgo biloba or silver apricot is a very ornamental tree thanks to the beauty of its leaves and its sprightly, elegant bearing.</h4>
                        <div className="btn-action d-flex justify-content-center">
                            <a className="btn bg-primary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-tree text-white"></i>Plant</a>
                            <a className="btn bg-secondary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-eye text-white"></i>Details</a>
                        </div>
                    </div> */}

                    {/* <div className="pb-5">
                        <h3 className="mb-3"> <span className="text-secondary text-uppercase">Birch</span>, a very ornamental tree</h3>
                        <img className="img-fluid mb-4" src="img/birch.png" alt="BirchTree" />

                        <h4 className="mb-4">Birch is a magnificent ornamental tree, known for its distinctive white bark.</h4>
                        <div className="btn-action d-flex justify-content-center">
                            <a className="btn bg-primary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-tree text-white"></i>Plant</a>
                            <a className="btn bg-secondary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-eye text-white"></i>Details</a>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}