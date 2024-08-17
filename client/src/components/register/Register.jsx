import { Link } from "react-router-dom";
import { useFormik } from 'formik';

import Path from "../../paths";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Register() {

	const { registerSubmitHandler } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: (values) => { registerSubmitHandler(values) },

		validate: ({ email, password, confirmPassword }) => {
			let errors = {};
			if (!email) {
				errors = { ...errors, email: 'Email is required!' };
			} else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(email)) {
				errors = { ...errors, email: 'Email is not valid!' };
			}
			if (!password) {
				errors = { ...errors, password: 'Password is required!' };
			} else if (password.length < 6) {
				errors = { ...errors, password: 'Password should be at least 6 characters!' };
			}
			if (!confirmPassword) {
				errors = { ...errors, confirmPassword: 'Please confirm the password!' };
			} else if (confirmPassword != password) {
				errors = { ...errors, confirmPassword: 'Passwords do not match!' };
			}
			return errors;
		},
	});

	return (
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={formik.handleSubmit}>
					<span className="login100-form-title">
						Register
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="email" name="email" placeholder="E-mail"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						{formik.errors.email && <p className="text-red">{formik.errors.email}</p>}
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
						<input className="input100" type="password" name="password" placeholder="Password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						{formik.errors.password && <p className="text-red">{formik.errors.password}</p>}
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
						<input className="input100" type="password" name="confirmPassword" placeholder="Confirm password"
							onChange={formik.handleChange}
							value={formik.values.confirmPassword}
						/>
						{formik.errors.confirmPassword && <p className="text-red">{formik.errors.confirmPassword}</p>}
					</div>

					<div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Register
						</button>
					</div>

					<div className="flex-col-c p-t-50 p-b-40">
						<span className="txt1 p-b-9">
							Already have an account?
						</span>

						<Link to={Path.Login} className="txt3">Login here</Link>

					</div>
				</form>
			</div>
		</div>
	)
}