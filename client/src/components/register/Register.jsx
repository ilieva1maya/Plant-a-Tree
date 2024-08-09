import { Link } from "react-router-dom"
import Path from "../../paths"


export default function Register() {
    return(
        
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150">
					<span className="login100-form-title">
                    Register
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name="username" placeholder="E-mail"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>

                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter password">
						<input className="input100" type="password" name="rePass" placeholder="RePassword"/>
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
{/* 
						<a href="#" className="txt3">
							Sign in here
						</a> */}
					</div>
				</form>
			</div>
		</div>
	
    )
}