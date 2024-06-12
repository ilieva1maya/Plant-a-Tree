import './App.css'

function App() {

    return (
        <>


            <div id="hero" className="hero overlay">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Your story begins from here.</h1>
                        <p>Your clients on the internet. Learn how to receive them.</p>
                        <a href="#" className="btn btn-border">Learn more</a>
                    </div>
                </div>
            </div>
            <main id="main" className="site-main">

                <section className="site-section section-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <h2>Responsive web design</h2>
                                <p>Responsive Web design is the approach that suggests that design and development should respond to the users behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries</p>
                            </div>
                            <div className="col-sm-7 hidden-xs">
                                <img src="assets/img/ipad-pro.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section section-services gray-bg text-center">
                    <div className="container">
                        <h2 className="heading-separator">Our Services</h2>
                        <p className="subheading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/anchor.svg" alt="" />
                                    <h3 className="service-title">Branding</h3>
                                    <p className="service-info"> Learn why your brand is a valuable component when it comes to your marketing communication and why you dont want to be without one.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/bycicle.svg" alt="" />
                                    <h3 className="service-title">Design</h3>
                                    <p className="service-info">The strength of a design lies as much in the steps taken to create it as in the final result. </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/paper-plane.svg" alt="" />
                                    <h3 className="service-title">Development</h3>
                                    <p className="service-info">Development is a way to make people aware of the services and/or products you are offering.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/photo.svg" alt="" />
                                    <h3 className="service-title">Photography</h3>
                                    <p className="service-info">Photographs are the legacy you leave for generations to come.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/microphone.svg" alt="" />
                                    <h3 className="service-title">Support</h3>
                                    <p className="service-info">A support network can include a variety of forms of interaction with a range of people who can support you in different ways. </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/rocket.svg" alt="" />
                                    <h3 className="service-title">Marketing</h3>
                                    <p className="service-info">Marketing is of vital importance to any business. It is the key process of researching, promoting and selling products or services to your target.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/basket.svg" alt="" />
                                    <h3 className="service-title">Ecommerce</h3>
                                    <p className="service-info">When customers are deciding on a purchase, they start by looking online.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="service">
                                    <img src="assets/img/chemestry.svg" alt="" />
                                    <h3 className="service-title">Coding</h3>
                                    <p className="service-info">We use the best coding practices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section section-map-feature text-center">

                    <div className="container">
                        <h2>Responsive Web Design</h2>
                        <p>Web design is responsive design. Responsive web design is web design, done right.</p>
                        <a href="#" className="btn btn-fill">Learn More</a>
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <div className="counter-item">
                                    <p className="counter" data-to="377" data-speed="2000">0</p>
                                    <h3>Cofee Cups</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="counter-item">
                                    <p className="counter" data-to="1204" data-speed="2000">0</p>
                                    <h3>Projects completed</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="counter-item">
                                    <p className="counter" data-to="459" data-speed="1000">0</p>
                                    <h3>Happy Clients</h3>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="counter-item">
                                    <p className="counter" data-to="675" data-speed="1000">0</p>
                                    <h3>Average Deal</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="site-section section-portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-separator">Latest Work</h2>
                            <p className="subheading-text">This is some of our best work</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-1.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-2.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-3.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-4.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-5.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-6.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-1.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <div className="portfolio-item">
                                    <img src="assets/img/portfolio-2.jpg" className="img-res" alt="" />
                                    <h4 className="portfolio-item-title">Portfolio item</h4>
                                    <a href="portfolio-item.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section section-newsletter text-center">
                    <div className="container">
                        <h2>Subscribe our newsletters</h2>
                        <form className="form-group newsletter-group">
                            <input type="email" className="form-control" placeholder="Your e-mail" required />
                            <button className="btn btn-green" type="button">Subscribe</button>
                        </form>
                    </div>
                </section>

            </main>

            <footer id="colophon" className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-6">
                            <a className="site-title"><span>Agency</span>Perfect</a>
                            <p>We are a digital agency focused on creative and results-driven solutions.</p>
                            <p>We measure our success by the results we drive for our clients.</p>
                        </div>
                        <div className="col-lg-offset-4 col-md-3 col-sm-4 col-md-offset-2 col-sm-offset-0 col-xs-6 ">
                            <h3>Keep in touch</h3>
                            <ul className="list-unstyled contact-links">
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@agencyperfect.com">info@agencyperfect.com</a></li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+37400800000">+374 (00) 80 00 00 </a></li>
                                <li><i className="fa fa-fax" aria-hidden="true"></i><a href="+37400900000">+374 (00) 90 00 00</a></li>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i><p>20 Leo, Armenia</p></li>
                            </ul>
                        </div>
                        <div className="clearfix visible-xs"></div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                            <h3>Featured links</h3>
                            <ul className="list-unstyled">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="portfolio.html">Porfolio</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="social-links">
                                    <a className="twitter-bg" href="#"><i className="fa fa-twitter"></i></a>
                                    <a className="facebook-bg" href="#"><i className="fa fa-facebook"></i></a>
                                    <a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a>
                                    <a className="linkedin-bg" href="#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="text-right">
                                    <p>&copy; AgencyPerfect</p>
                                    <p>All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
