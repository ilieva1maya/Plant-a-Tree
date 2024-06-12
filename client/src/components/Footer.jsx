export default function Footer() {
    return(
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
    )
}