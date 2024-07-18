export default function SpeciesItem({
    _id,
    name,
    image,
    more,
}) {
    return (
        <div className="pb-5">
            <h3 className="mb-3"> <span className="text-secondary text-uppercase">{name}</span></h3>
            <img className="img-fluid mb-4" src={image} alt={name} />

            <h4 className="mb-4">{more}</h4>
            <div className="btn-action d-flex justify-content-center">
                <a className="btn bg-primary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-tree text-white"></i>Plant</a>
                <a className="btn bg-secondary py-2 px-3" style={{ color: "black" }} href=""><i className="bi bi-eye text-white"></i>Details</a>
            </div>
        </div>
    )
}