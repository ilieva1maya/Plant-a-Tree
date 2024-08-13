import { Link } from "react-router-dom"
import Path from "../../paths"
import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
	Email: 'email',
	Password: 'password',
	ConfirmPassword: 'rePass',
}

export default function Register() {

	const { registerSubmitHandler } = useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
		[RegisterFormKeys.Email]: '',
		[RegisterFormKeys.Password]: '',
		[RegisterFormKeys.ConfirmPassword]: '',
	});

	return (
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={onSubmit}>
					<span className="login100-form-title">
						Register
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="email" name="email" placeholder="E-mail"
							onChange={onChange}
							values={values[RegisterFormKeys.Email]}
						/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
						<input className="input100" type="password" name="password" placeholder="Password"
							onChange={onChange}
							values={values[RegisterFormKeys.Password]}
						/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
						<input className="input100" type="password" name="rePass" placeholder="RePassword"
							onChange={onChange}
							values={values[RegisterFormKeys.ConfirmPassword]}
						/>
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
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