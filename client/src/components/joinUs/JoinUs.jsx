import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import { useFormik } from 'formik';

export default function JoinUs() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            nickName: '',
            email: '',
            motivation: '',
            more: '',
            image: '',
        },
        onSubmit: () => {
            alert(`Thanks, ${formik.values.name} for your interest! We will review your application and will come back to you via ${formik.values.email} shortly!`),
                navigate(Path.Home);
        },
        validate: ({ name, nickName, email, motivation, more, image }) => {
            let errors = {};
            if (!name) {
                errors = { ...errors, name: 'Name is required!' };
            }
            else if (!nickName) {
                errors = { ...errors, nickName: 'NickName is required!' };
            }
            else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(email)) {
                errors = { ...errors, email: 'Email is not valid!' };
            }
            else if (!motivation) {
                errors = { ...errors, motivation: 'Please share why you want to join our team' };
            }
            else if (!more) {
                errors = { ...errors, more: 'Please, tell us something more about you!' };
            }
            else if (!image) {
                errors = { ...errors, image: 'Image is required!' };
            }
            return errors;
        },
    });

    return (
        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                    <h3 className="text-primary text-uppercase">Join Our Team</h3>
                </div>
                <div className="row gx-5 mb-5">
                    <div className="col-lg-6 pb-5 h-100 p-5">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row g-3">
                                <div className="col-7">
                                    <input type="text" name="name" className="form-control bg-light border-0 px-4" placeholder="Name" style={{ height: 55 }}
                                        value={formik.values.name}
                                        onChange={formik.handleChange} />
                                    {formik.errors.name && <p className="text-red">{formik.errors.name}</p>}
                                </div>
                                <div className="col-7">
                                    <input type="text" name="nickName" className="form-control bg-light border-0 px-4" placeholder="NickName" style={{ height: 55 }}
                                        value={formik.values.nickName}
                                        onChange={formik.handleChange} />
                                    {formik.errors.nickName && <p className="text-red">{formik.errors.nickName}</p>}
                                </div>
                                <div className="col-7">
                                    <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="Email" style={{ height: 55 }}
                                        value={formik.values.email}
                                        onChange={formik.handleChange} />
                                    {formik.errors.email && <p className="text-red">{formik.errors.email}</p>}
                                </div>
                                <div className="col-12">
                                    <input type="text" name="motivation" className="form-control bg-light border-0 px-4" placeholder="Why I want to became a volunteer" style={{ height: 55 }}
                                        value={formik.values.motivation}
                                        onChange={formik.handleChange} />
                                    {formik.errors.motivation && <p className="text-red">{formik.errors.motivation}</p>}
                                </div>
                                <div className="col-12">
                                    <textarea name="more" className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Everything else I want to share with you"
                                        value={formik.values.more}
                                        onChange={formik.handleChange}></textarea>
                                    {formik.errors.more && <p className="text-red">{formik.errors.more}</p>}
                                </div>
                                <div className="col-12">
                                    <input name="image" className="form-control bg-light border-0 px-4 py-3" type="text" rows="2" placeholder="Image"
                                        value={formik.values.image}
                                        onChange={formik.handleChange} />
                                    {formik.errors.image && <p className="text-red">{formik.errors.image}</p>}
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
