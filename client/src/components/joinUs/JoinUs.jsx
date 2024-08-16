import { useNavigate } from "react-router-dom";
import Path from "../../paths";

export default function JoinUs() {

    const navigate = useNavigate();
    const joinUs = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget))

        if (!values.name) {
            alert('Name is required!');
        } else if (!values.nickName) {
            alert('NickName is required')
        } else if (!values.email) {
            alert('Email is required')
        } else if (!values.motivation) {
            alert('Please share why you want to join oyr team!')
        } else if (!values.more) {
            alert('Tell us something more about you')
        } else if (!values.image) {
            alert('Image is required')
        }
        else {
            alert('Thanks for your interest! We will review your application and will come back to you shortly!');
            navigate(Path.Home);
        }
    }

    return (
        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                    <h3 className="text-primary text-uppercase">Join Our Team</h3>
                </div>
                <div className="row gx-5 mb-5">
                    <div className="col-lg-6 pb-5 h-100 p-5">
                        <form onSubmit={joinUs}>
                            <div className="row g-3">
                                <div className="col-7">
                                    <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-7">
                                    <input type="text" name="nickName" className="form-control bg-light border-0 px-4" placeholder="NickName" style={{ height: 55 }} />
                                </div>
                                <div className="col-7">
                                    <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="Email" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input type="text" name="motivation" className="form-control bg-light border-0 px-4" placeholder="Why I want to became a volunteer" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <textarea name="more" className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Everything else I want to share with you"></textarea>
                                </div>
                                <div className="col-12">
                                    <input name="image" className="form-control bg-light border-0 px-4 py-3" type="text" rows="2" placeholder="Image"></input>
                                </div>
                                <div className="col-7">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Apply</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex h-100">
                            <img className="img-fluid mt-0 mx-auto" src="img/team1.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
