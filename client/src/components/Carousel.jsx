export default function Carousel() {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/forest1.png" alt="Forest" />
                        <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                            <div className="text-start p-5" style={{ maxWidth: 1200 }}> 
                            <h1 className="display-4 text-white mb-md-4">The Nature is beauty, the Nature is life!
</h1>                               
                                <h3 className="display-6 text-white mb-md-4">Want to plant a tree, but you never have time to?</h3>
                                <h3 className="display-6 text-white mb-md-4">With just one click buy a tree from our Catalog, and we will plant it for you!</h3>
                                
                                <a href="" className="btn btn-secondary py-md-3 px-md-5">Catalog</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                            <div className="text-start p-5" style={{ maxWidth: 900 }}>
                                <h3 className="text-white">Organic Fruits</h3>
                                <h1 className="display-1 text-white mb-md-4">Organic Fruits For Better Health</h1>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Explore</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}