import { Link } from "react-router-dom"
import Path from "../../paths"

export default function SpeciesItem({
    _id,
    name,
    image,
    more,
}) {
    return (
        <div className="container-fluid about pt-3">
            <div className="container">
                <div className="row gx-5 mb-5">

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <img className="img-fluid mt-0 mx-auto" src={image} alt={name} />
                        </div>
                    </div>

                    <div className="col-lg-6 pb-5 h-100 p-5">
                        <h3 className="mb-3"> <span className="text-secondary text-uppercase d-flex justify-content-center">{name}</span></h3>
                        <h4 className="mb-4">{more}</h4>
                        <div className="btn-action d-flex justify-content-center">                            
                            <Link to={`${Path.Catalog}/${_id}`} className="btn bg-secondary py-2 px-3" style={{ color: "black" }}><i className="bi bi-eye text-white"></i>Details</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}