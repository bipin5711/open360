import React from 'react'
import nextStep from '../assets/next-step.png';
import Sidebar from './sidebar';
import Header from "./header";

export default function Layout({title='',children}) {
  return (
		<body>
			<div class="wrapper-body">
           <Sidebar pageName={title}  />
				<div class="wrapper-main">
              <Header title={title} />
					{children}
				</div>
			</div>
		</body>
  );
}
