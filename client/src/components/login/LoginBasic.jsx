export default function LoginBasic(){
    return(

		<div className="container">
			<div className="wrap-login100">
				<form className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
					<span className="text-primary text-uppercase display-6">
						Sign In
					</span>

					<div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Please enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>

					<div className="text-right p-t-13 p-b-23">
						<span className="txt1">
							Forgot
						</span>

						<a href="#" className="txt2">
							Username / Password?
						</a>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>

					<div className="flex-col-c p-t-170 p-b-40">
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