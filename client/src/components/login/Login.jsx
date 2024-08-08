import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
	Email: 'email',
	Password: 'password'
}

export default function Login() {
	const { loginSubmitHandler } = useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
		[LoginFormKeys.Email]: '',
		[LoginFormKeys.Password]: '',
	});
	return (

		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150" onSubmit={onSubmit}>
					<span className="login100-form-title">
						Sign In
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name={LoginFormKeys.Email} placeholder="E-mail"
							onChange={onChange}
							value={values[LoginFormKeys.Email]} />
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Please enter password">
						<input className="input100" type="password" name={LoginFormKeys.Password} placeholder="Password"
							onChange={onChange}
							value={values[LoginFormKeys.Password]} />
						<span className="focus-input100"></span>
					</div>

					<div className="text-right p-t-13 p-b-23">
						<a href="#" className="txt2">
							Forgot Username / Password?
						</a>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>

					<div className="flex-col-c p-t-50 p-b-40">
						<span className="txt1 p-b-9">
							Don’t have an account?
						</span>

						<a href="#" className="txt3">
							Sign up now
						</a>
					</div>
				</form>
			</div>
		</div>

	)
}