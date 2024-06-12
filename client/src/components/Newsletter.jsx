export default function Newsletter() {
    return (
        <section className="site-section section-newsletter text-center">
            <div className="container">
                <h2>Subscribe our newsletters</h2>
                <form className="form-group newsletter-group">
                    <input type="email" className="form-control" placeholder="Your e-mail" required />
                    <button className="btn btn-green" type="button">Subscribe</button>
                </form>
            </div>
        </section>
    )
}