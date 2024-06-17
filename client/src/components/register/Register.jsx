export default function Register() {
    return(
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form p-l-55 p-r-55 p-t-150">
					<span className="login100-form-title">
                    Register
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name="username" placeholder="Username"/>
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
							Sign up
						</button>
					</div>

					<div className="flex-col-c p-t-50 p-b-40">
						<span className="txt1 p-b-9">
							Already have an account?
						</span>

						<a href="#" className="txt3">
							Sign in
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
}