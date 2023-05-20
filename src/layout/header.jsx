import React from 'react'
import search from '../assets/search.png';
import notification from '../assets/notification.png';
import avatar from '../assets/avatar.png';

export default function Header({title}) {
  return (
		<div class="container-fluid">
			<div class="page-title-main">
				<div class="title-left">
					<h1 class="tab-name-change">{title}</h1>
				</div>
				<div class="menu-icon">
					<div class="dropdown search">
						<button
							class="btn dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img src={search} />
						</button>
						<ul class="dropdown-menu">
							<li>
								<a class="dropdown-item" href="#">
									<div>
										<input
											type="text"
											class="form-control"
											id="search"
											placeholder="Search..."
										/>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="notification">
						<img src={notification} />
					</div>
					<div class="profile-avatar">
						<div class="profile-details">
							<span class="profile-name">Collette</span>
							<span class="profile-email">
								collette@open360.com
							</span>
						</div>
						<div class="avtar">
							<img src={avatar} />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}
