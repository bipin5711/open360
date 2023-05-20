import React from 'react'
import logo from '../assets/logo.png';
import line from '../assets/Line.png';
import individual from '../assets/Individual.png';
import organization from '../assets/Organization.png';
import manager from '../assets/Manager.png';
import nextStep from '../assets/next-step.png';

export default function Signup() {
  return (
		<body>
			<section class="singup">
				<div class="container-fluid g-0">
					<div class="row g-0">
						<div class="col-lg-12">
							<div class="logo-img">
								<img src={logo} />
							</div>
						</div>
					</div>
					<div class="row g-0">
						<div class="col-lg-12">
							<div class="steaper">
								<div class="step active">1</div>
								<div class="line">
									<img src={line} />
								</div>
								<div class="step">2</div>
								<div class="line">
									<img src={line} />
								</div>
								<div class="step">3</div>
								<div class="line">
									<img src={line} />
								</div>
								<div class="step">4</div>
							</div>
						</div>
					</div>
					<div class="row  g-0">
						<div class="col-lg-12">
							<div class="headingSection">
								<h4>Create an Account</h4>
								<p>Please select your appropriate role</p>
							</div>
						</div>

						<div class="col-lg-12">
							<div class="role-selection">
								<div class="role">
									<input
										type="radio"
										class="btn-check"
										name="select-role"
										id="individual"
										autocomplete="off"
									/>
									<label
										class="btn btn-role"
										for="individual"
									>
										<img src={individual} />
										<span>Individual</span>
									</label>
								</div>
								<div class="role">
									<input
										type="radio"
										class="btn-check"
										name="select-role"
										id="organization"
										checked
										autocomplete="off"
									/>
									<label
										class="btn btn-role"
										for="organization"
									>
										<img src={organization} />
										<span>Organization</span>
									</label>
								</div>
								<div class="role">
									<input
										type="radio"
										class="btn-check"
										name="select-role"
										id="manager"
										autocomplete="off"
									/>
									<label class="btn btn-role" for="manager">
										<img src={manager} />
										<span>Manager</span>{' '}
									</label>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="next-step">
								<button type="submit" class="btn btn-next mb-3">
									<img src={nextStep} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</body>
  );
}
