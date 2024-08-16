import { useNavigate } from "react-router-dom";
import Path from "../../paths";

export default function ContactUs() {

    const navigate = useNavigate();
    const contactUs = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget))

        if (!values.name || !values.email || !values.subject || !values.message) {
            alert('All fields are required!');
        } else {
            console.log(JSON.stringify(values));

            alert('Thanks for contacting us! We will come back to you shortly!');
            navigate(Path.Home);
        }

    }

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                    <h3 className="text-primary text-uppercase">Contact Us</h3>
                </div>
                <div className="row g-0">
                    <div className="col-lg-7">
                        <div className="bg-primary h-100 p-5">
                            <form onSubmit={contactUs}>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-6">
                                        <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="subject" className="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
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
                                    <span className="text-white">1, Konche Vihrogonche Str., Sofia, Bulgaria</span>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 55 }}>
                                    <i className="bi bi-envelope-open fs-4 text-white"></i>
                                </div>
                                <div className="ps-3">
                                    <h5 className="text-white">Email Us</h5>
                                    <span className="text-white">plant@nature.com</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 55 }}>
                                    <i className="bi bi-phone-vibrate fs-4 text-white"></i>
                                </div>
                                <div className="ps-3">
                                    <h5 className="text-white">Call Us</h5>
                                    <span className="text-white">+359 2 987 65 43</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}