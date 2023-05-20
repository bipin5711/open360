import React from 'react';
import Layout from '../layout';
import nextStep from '../assets/next-step.png';


export default function Challenges() {
	return (
		<Layout title="Challenges">
			<div class="container-fluid">
				<section class="profile-page-main">
					<div class="line-tab-main">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item" role="presentation">
								<button
									class="nav-link active"
									id="home-tab"
									data-bs-toggle="tab"
									data-bs-target="#home-tab-pane"
									type="button"
									role="tab"
									aria-controls="home-tab-pane"
									aria-selected="true"
								>
									Open360 Challenges
								</button>
							</li>
							<li class="nav-item" role="presentation">
								<button
									class="nav-link"
									id="profile-tab"
									data-bs-toggle="tab"
									data-bs-target="#profile-tab-pane"
									type="button"
									role="tab"
									aria-controls="profile-tab-pane"
									aria-selected="false"
								>
									Active Challenges
								</button>
							</li>
						</ul>
						<div class="tab-content" id="myTabContent">
							<div
								class="tab-pane fade show active"
								id="home-tab-pane"
								role="tabpanel"
								aria-labelledby="home-tab"
								tabindex="0"
							>
								<div class="action-bar">
									<div class="action-wrapper">
										<div class="searchChallenge mb-3">
											<input
												type="text"
												class="form-control"
												id="searchChallenge"
												placeholder="Search challenge"
											/>
										</div>
										<div class="sortby mb-3">
											<select
												class="form-select"
												aria-label="Default select example"
											>
												<option selected>
													Sort by
												</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
									</div>

									<div class="request-challenge mb-3">
										<button
											type="submit"
											class="btn"
											data-bs-toggle="modal"
											data-bs-target="#requestChallenge"
										>
											Request Challenge
										</button>
									</div>
								</div>
								<div class="challenge-open-wrapper">
									<div class="open-table challenge-open">
										<div class="table-responsive">
											<table class="table table-hover  border-gray-800 bg-white">
												<thead>
													<tr>
														<th scope="col">
															Challenge Name
														</th>
														<th scope="col"></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Challenge One</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Two</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Three</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Four</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Five</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Six</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
													<tr>
														<td>Challenge Seven</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>

													<tr>
														<td>Challenge Eight</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>

													<tr>
														<td>Challenge Nine</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>

													<tr>
														<td>Challenge Ten</td>
														<td>
															<button class="btn btn-set">
																Set
															</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>

									<div class="side-tab">
										<h3 class="side-title">
											Challenge Details
										</h3>
										<div class="side-section">
											<h6>Description</h6>
											<p>
												Challenge description will come
												here
											</p>
										</div>

										<div class="side-section">
											<h6>Criteria</h6>
											<p>
												criteria for the challenge will
												come here <br />
												criteria for the challenge will
												come here
												<br />
												criteria for the challenge will
												come here
											</p>
										</div>

										<div class="side-section">
											<h6>Available Badges</h6>
										</div>
										<div class="side-section">
											<h6>Created</h6>
											<p>
												by <span>Elizabeth James</span>{' '}
												on <span>01/12/2022</span>
											</p>
										</div>

										<div class="set-challange">
											<a
												href="#"
												data-bs-toggle="modal"
												data-bs-target="#setChallenge"
											>
												{' '}
												<span>Set Challenge</span>
												<img src={nextStep} />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								class="tab-pane fade"
								id="profile-tab-pane"
								role="tabpanel"
								aria-labelledby="profile-tab"
								tabindex="0"
							>
								<div class="action-bar">
									<div class="action-wrapper">
										<div class="searchChallenge mb-3">
											<input
												type="text"
												class="form-control"
												id="searchChallenge"
												placeholder="Search challenge"
											/>
										</div>
										<div class="sortby mb-3">
											<select
												class="form-select"
												aria-label="Default select example"
											>
												<option selected>
													Sort by
												</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
									</div>

									<div class="request-challenge mb-3">
										<button
											type="submit"
											class="btn"
											data-bs-toggle="modal"
											data-bs-target="#requestChallenge"
										>
											Request Challenge
										</button>
									</div>
								</div>
								<div class="open-table">
									<div class="table-responsive">
										<table class="table table-hover  border-gray-800 bg-white">
											<thead>
												<tr>
													<th scope="col">
														Challenge Name
													</th>
													<th scope="col">
														Start Date
													</th>
													<th scope="col">
														End Date
													</th>
													<th scope="col">
														Participants
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Challenge One</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Two</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Three</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Four</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Five</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Six</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
												<tr>
													<td>Challenge Seven</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>

												<tr>
													<td>Challenge Eight</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>

												<tr>
													<td>Challenge Nine</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>

												<tr>
													<td>Challenge Ten</td>
													<td>03/02/22</td>
													<td>03/06/22</td>
													<td>55</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* <!-- Request Challenge Modal --> */}
			<div
				class="modal fade"
				id="requestChallenge"
				tabindex="-1"
				aria-labelledby="requestChallengeLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-lg modal-dialog-centered">
					<div class="modal-content main-modal">
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
						<h1 class="modal-title fs-5" id="requestChallengeLabel">
							Request Challenge
						</h1>
						<div class="modal-body">
							<div class="RQ-popup">
								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Name of Challenge"
									/>
									<label for="floatingInput">
										Name of Challenge
									</label>
								</div>

								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Purpose of Challenge"
									/>
									<label for="floatingInput">
										Purpose of Challenge
									</label>
								</div>

								<div class="form-floating mb-3 open-input">
									<select
										class="form-select"
										id="floatingSelect"
										aria-label="Floating label select"
									>
										<option selected>Reward Badges</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<label for="floatingSelect">
										Reward Badges
									</label>
								</div>

								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Areas of Focus"
									/>
									<label for="floatingInput">
										Areas of Focus
									</label>
								</div>

								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Additional Comments"
									/>
									<label for="floatingInput">
										Additional Comments
									</label>
								</div>
							</div>
							<div class="submit-request">
								<a href="#">
									{' '}
									<span>Submit Request</span>
									<img src={nextStep} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Set Challenge Modal --> */}
			<div
				class="modal fade"
				id="setChallenge"
				tabindex="-1"
				aria-labelledby="setChallengeLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-lg modal-dialog-centered">
					<div class="modal-content main-modal">
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
						<h1 class="modal-title fs-5" id="setChallengeLabel">
							Set Challenge
						</h1>
						<div class="modal-body">
							<div class="RQ-popup">
								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Name of Challenge"
									/>
									<label for="floatingInput">
										Name of Challenge
									</label>
								</div>

								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Purpose of Challenge"
									/>
									<label for="floatingInput">
										Start Date
									</label>
								</div>
								<div class="form-floating mb-3 open-input">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="Areas of Focus"
									/>
									<label for="floatingInput">End Date</label>
								</div>
							</div>
							<div class="submit-request">
								<a href="#">
									{' '}
									<span>Set Challenge</span>
									<img src={nextStep} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
