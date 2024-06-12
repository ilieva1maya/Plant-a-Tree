export default function Navigation() {
    return (
        <nav id="primary-navigation" className="site-navigation">
            <div className="container">

                <div className="navbar-header">

                    <a className="site-title"><span>Agency</span>Perfect</a>

                </div>

                <div className="collapse navbar-collapse" id="agency-navbar-collapse">

                    <ul className="nav navbar-nav navbar-right">

                        <li className="active"><a href="index.html" data-toggle="dropdown">Home</a></li>
                        <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages<i className="fa fa-caret-down hidden-xs" aria-hidden="true"></i></a>

                            <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="blog.html">Blog</a></li>
                            </ul>

                        </li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="ui-elements.html">UI Elements</a></li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}