import React from 'react'
import aboutImg  from '../assets/about_hero 1.png';
import  logo  from '../assets/logo.png';

export default function Login() {
  return (
		<body>
			<main class="login">
				<div class="container-fluid g-0">
					<div class="row min-vh-100 g-0">
						<div class="col-lg-6">
							<div id="loginCarousel" class="carousel slide">
								<div class="carousel-indicators">
									<button
										type="button"
										data-bs-target="#loginCarousel"
										data-bs-slide-to="0"
										class="active"
										aria-current="true"
										aria-label="Slide 1"
									></button>
									<button
										type="button"
										data-bs-target="#loginCarousel"
										data-bs-slide-to="1"
										aria-label="Slide 2"
									></button>
									<button
										type="button"
										data-bs-target="#loginCarousel"
										data-bs-slide-to="2"
										aria-label="Slide 3"
									></button>
								</div>
								<div class="carousel-inner carousel-custom min-vh-100">
									<div class="carousel-item active">
										<img
											src={aboutImg}
											class="d-block"
											alt="feedback"
										/>
										<div class="carousel-caption d-none d-md-block">
											<h5>Get Feedback</h5>
											<p>
												Getting feedback is an important
												aspect of personal and
												professional growth.
											</p>
										</div>
									</div>
									<div class="carousel-item">
										<img
											src={aboutImg}
											class="d-block"
											alt="feedback"
										/>
										<div class="carousel-caption d-none d-md-block">
											<h5>Second slide label</h5>
											<p>
												Some representative placeholder
												content for the second slide.
											</p>
										</div>
									</div>
									<div class="carousel-item">
										<img
											src={aboutImg}
											class="d-block"
											alt="feedback"
										/>
										<div class="carousel-caption d-none d-md-block">
											<h5>Third slide label</h5>
											<p>
												Some representative placeholder
												content for the third slide.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-12">
							<div class="login-form position-relative min-vh-100 ">
								<div class="login-details">
									<div class="logo-img">
										<img src={logo} />
									</div>

									<h3 class="open-title">
										Welcome to Open360
									</h3>
									<form>
										<div class="form-floating mb-3 open-input">
											<input
												type="text"
												class="form-control"
												id="floatingInput"
												placeholder="name@example.com"
											/>
											<label for="floatingInput">
												Username or Email
											</label>
										</div>
										<div class="form-floating open-input">
											<input
												type="password"
												class="form-control"
												id="floatingPassword"
												placeholder="Password"
											/>
											<label for="floatingPassword">
												Password
											</label>
										</div>

										<div class="forgotPass">
											<a href="#">Forgot Password</a>
										</div>
										<div class="btn-section">
											<button
												type="submit"
												class="btn btn-primary open-btn mb-3"
											>
												Sign In
											</button>
										</div>
									</form>
								</div>
								<div class="ntaMember position-absolute">
									<span>
										Not a member?{' '}
										<a href="#">Create Account</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<script
				src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
				crossorigin="anonymous"
			></script>
			<script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
				crossorigin="anonymous"
			></script>
		</body>
  );
}
