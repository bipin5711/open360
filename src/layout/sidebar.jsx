import React from 'react'
import logoW from '../assets/logo-w.png';
import menuLineIcon from '../assets/menu-line-icon.png';
import dashboard  from '../assets/dashboard.svg';
import content from '../assets/content.svg';
import employees from '../assets/employees.png';
import  challenges from '../assets/graph.png';
import  coach from '../assets/coach.svg';
import setting from '../assets/setting.svg';
import { useNavigate } from 'react-router-dom';
import logout from '../assets/logout.svg';

const pages = [
	{
		title: 'Dashboard',
		image: dashboard,
		route: '/dashboard',
	},
	{
		title: 'Content',
		image: content,
		route: '/content',
	},
	{
		title: 'Employees',
		image: employees,
		route: '/employees',
	},
	{
		title: 'Challenges',
		image: challenges,
		route: '/challenges',
	},
	{
		title: 'Conversation',
		image: coach,
		route: '/conversation',
	},
	{
		title: 'Coach',
		image: coach,
		route: '/coach',
	},
	{
		title: 'Support',
		image: setting,
		route: '/support',
	},
	{
		title: 'Setting',
		image: setting,
		route: '/setting',
	},
];

export default function Sidebar({pageName}) {
	const navigate = useNavigate();

   const handleNavigate = (route) => {
      navigate(route)
   }
  return (
		<div class="sidebar">
			<div class="logo-main">
				<img src={logoW} class="img-fluid" />
				<button class="navbar-toggler" type="button">
					<img src={menuLineIcon} />
				</button>
			</div>
			<div class="main-nav-link">
				<ul>
					{pages.map((page) => (
						<li class={pageName == page.title ? "active" : ""} onClick={()=>handleNavigate(page.route)}>
							<a>
								<img src={page.image} />
								{page.title}
							</a>
						</li>
					))}

			
				</ul>
				<ul class="bottom-menu">
					<li class="no-line-nav">
						<a href="">
							<img src={logout} /> Sign Out
						</a>
					</li>
				</ul>
			</div>
		</div>
  );
}
