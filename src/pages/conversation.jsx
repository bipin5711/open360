import React from 'react';
import Layout from '../layout';

export default function Conversation() {
	return (
		<Layout title="Conversation">
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
										placeholder="Search an announcement"
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

							<div class="request-challenge mb-3">
								<a class="btn" href="./make-announcement.html">
									Make an Announcement
								</a>
							</div>
						</div>

						<div class="open-table">
							<div class="table-responsive">
								<table class="table table-hover  border-gray-800 bg-white">
									<thead>
										<tr>
											<th scope="col">Announcements</th>
											<th scope="col">Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>

										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>

										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>

										<tr>
											<td>Announcements</td>
											<td>03/02/22</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
