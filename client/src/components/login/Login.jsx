import { useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

export default function Login() {
	const { loginSubmitHandler } = useContext(AuthContext);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => { loginSubmitHandler(values) },

		validate: ({ email, password }) => {
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
			return errors;
		},
	});

	const forgottenPassword = async (e) => {
		e.preventDefault();

		prompt('Please type your email \nPlease follow the steps in your email for password recovery');
		navigate(Path.Home);
	}

	return (
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={formik.handleSubmit}>
					<span className="login100-form-title">
						Login
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100"
							id="email"
							name="email"
							type="email"
							placeholder="E-mail"
							value={formik.values.email}
							onChange={formik.handleChange}
						/>						
						{formik.errors.email && <p className="text-red">{formik.errors.email}</p>}
					</div>

					<div className="wrap-input100 validate-input" data-validate="Please enter password">
						<input className="input100"
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						{formik.errors.password && <p className="text-red">{formik.errors.password}</p>}
					</div>

					<div className="text-right p-t-13 p-b-23">
						<a href="#" className="txt2" onClick={forgottenPassword}>
							Forgot Username / Password?
						</a>
					</div>

					<div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="flex-col-c p-t-50 p-b-40">
						<span className="txt1 p-b-9">
							Don’t have an account?
						</span>
						<Link to={Path.Register} className="txt3">Register now</Link>
					</div>
				</form>
			</div>
		</div>
	)
}