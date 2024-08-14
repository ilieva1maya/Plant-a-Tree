import { useEffect, useState } from "react";
import * as speciesService from "../../services/speciesService"
import SpeciesItem from "./SpeciesItem";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Catalog() {

    const [species, setSpecies] = useState([]);

    useEffect(() => {
        speciesService.getAll()
            .then(result => setSpecies(result))
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div>
                    {species.length > 0 && (
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 800 }}>
                            <h3><i className="fa fa-arrow-down"></i>  Please choose from the <span className="text-primary text-uppercase">trees</span> listed below  <i className="fa fa-arrow-down"></i></h3>
                        </div>
                    )}

                    {species.map(tree => (
                        <SpeciesItem key={tree._id}{...tree} />
                    ))}

                    {species.length === 0 && (
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 800 }}>
                            <h3 className="mb-5">Sorry, we do not have trees in our catalog.
                                Be the first to <Link to={Path.AddSpecies}><h3 className="text-primary text-uppercase">add</h3></Link></h3>
                            <img className="w-100" src="img/TreeToAdd.jpg" alt="Forest" />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}