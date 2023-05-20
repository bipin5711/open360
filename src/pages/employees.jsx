import React from 'react'
import nextStep from '../assets/next-step.png';
import Layout from "../layout";

export default function Employees() {
  return (
		<Layout title="Employees">
			<div class="container-fluid">
				<section class="profile-page-main">
					<div class="line-tab-main">
						<div class="action-bar mt-3">
							<div class="action-wrapper">
								<div class="searchChallenge mb-3">
									<input
										type="text"
										class="form-control"
										id="searchChallenge"
										placeholder="Search an employee"
									/>
								</div>
								<div class="sortby mb-3">
									<select
										class="form-select"
										aria-label="Default select example"
									>
										<option selected>Sort by</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>

							<div class="add-emp-btn  mb-3 dropdown">
								<button
									class="btn dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Add Employee
								</button>
								<ul class="dropdown-menu">
									<li>
										<a
											data-bs-toggle="modal"
											data-bs-target="#inviteEmployee"
											class="dropdown-item"
											href="#"
										>
											Invite Employee{' '}
										</a>
									</li>
									<li>
										<a
											data-bs-toggle="modal"
											data-bs-target="#uploasFiles"
											class="dropdown-item"
											href="#"
										>
											Upload Files
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="open-table">
							<div class="table-responsive">
								<table class="table table-hover  border-gray-800 bg-white">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Role</th>
											<th scope="col">Field</th>
											<th scope="col">Field</th>
											<th scope="col">Field</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>

										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>

										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>

										<tr>
											<td>Name</td>
											<td>Role</td>
											<td>Field</td>
											<td>Field</td>
											<td>Field</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* <!-- Invite Employee Modal --> */}
			<div
				class="modal fade"
				id="inviteEmployee"
				tabindex="-1"
				aria-labelledby="inviteEmployeeLabel"
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
						<h1 class="modal-title fs-5" id="inviteEmployeeLabel">
							Invite Employee
						</h1>
						<div class="modal-body invite-emp-wrapper">
							<div class="invite-emp-model">
								<div class="mb-3 search-email">
									<label
										for="exampleFormControlInput1"
										class="form-label"
									>
										Invite people to join
									</label>
									<input
										type="email"
										class="form-control"
										id="exampleFormControlInput1"
										placeholder="name@example.com"
									/>
								</div>

								<div class="invited-list">
									<h3>
										Invited <span>(3)</span>
									</h3>
									<div class="email-list-wrapper">
										<div class="email-list">
											<span class="name-title">JC</span>
											<span class="email">
												Jamescharles@gmail.com
											</span>
											<a href="#">
												<img src="./img/cross.png" />
											</a>
										</div>

										<div class="email-list">
											<span class="name-title">JC</span>
											<span class="email">
												Jamescharles@gmail.com
											</span>
											<a href="#">
												<img src="./img/cross.png" />
											</a>
										</div>

										<div class="email-list">
											<span class="name-title">JC</span>
											<span class="email">
												Jamescharles@gmail.com
											</span>
											<a href="#">
												<img src="./img/cross.png" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="submit-request">
								<a href="#">
									{' '}
									<span>Invite</span>
									<img src="./img/next-step.png" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Upload Files Modal --> */}
			<div
				class="modal fade"
				id="uploasFiles"
				tabindex="-1"
				aria-labelledby="uploasFilesLabel"
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
						<h1 class="modal-title fs-5" id="uploasFilesLabel">
							Upload Files
						</h1>
						<div class="modal-body invite-emp-wrapper">
							<div class="upload-file-model">
								<div class="row">
									<div class="col-md-6">
										<form
											id="upload"
											action="upload.php"
											method="POST"
											enctype="multipart/form-data"
										>
											<fieldset>
												<input
													type="hidden"
													id="MAX_FILE_SIZE"
													name="MAX_FILE_SIZE"
													value="300000"
												/>
												<div>
													<div
														id="filedrag"
														class="drag-drop-file-box"
													>
														<img src="./img/file-upload.png" />
														<p>
															Drag Files to Upload
															<br />
															or
														</p>
														<div class="select-file-main">
															<button
																type="button"
																class="btn btn-outline-01"
															>
																Browse Files
															</button>
															<input
																type="file"
																id="fileselect"
																name="fileselect[]"
																multiple="multiple"
															/>
														</div>
														<div class="small-text">
															Max file size 50mb
															<br />
															Supported file
															types: csv
														</div>
													</div>
												</div>
												<div id="submitbutton">
													<button type="submit">
														Upload Files
													</button>
												</div>
											</fieldset>
										</form>
									</div>
									<div class="col-md-6">
										<ul
											class="uploded-img-list"
											data-bind="foreach: filesUploaded"
										>
											<li>
												<img src="./img/done-icon.png" />
												<span data-bind="text: name"></span>{' '}
												<span data-bind="text: size"></span>
												bytes
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="submit-request">
								<a href="#">
									{' '}
									<span>Invite</span>
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
