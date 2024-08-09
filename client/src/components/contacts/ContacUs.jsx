export default function ContactUs() {
    return(
        <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                <h6 className="text-primary text-uppercase">Contact Us</h6>
                <h1 className="display-5">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="bg-primary h-100 p-5">
                        <form>
                            <div className="row g-3">
                                <div className="col-6">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }}/>
                                </div>
                                <div className="col-6">
                                    <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }}/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: 55 }}/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-secondary h-100 p-5">
                        <h2 className="text-white mb-4">Get In Touch</h2>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 55 }}>
                                <i className="bi bi-geo-alt fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Our Office</h5>
                                <span className="text-white">123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 55 }}>
                                <i className="bi bi-envelope-open fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Email Us</h5>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 55 }}>
                                <i className="bi bi-phone-vibrate fs-4 text-white"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Call Us</h5>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}