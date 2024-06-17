export default function RegisterBasic(){
    return(

		<div className="container">
			<div className="wrap-login100">
				<form className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
					<span className="text-primary text-uppercase display-6">
						Register
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Please enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Please enter password">
						<input className="input100" type="password" name="rePass" placeholder="RePassword"/>
						<span className="focus-input100"></span>
					</div>


					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign up
						</button>
					</div>

					<div className="flex-col-c p-t-170 p-b-40">
						<span className="txt1 p-b-9">
							Already have an account?
						</span>

						<a href="#" className="txt3">
							Sign in now
						</a>
					</div>
				</form>
			</div>
		</div>
	
    )
}