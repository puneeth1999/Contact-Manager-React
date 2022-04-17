import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
			<div className="container">
				<a href='/' className='navbar-brand'>{props.branding}</a>
				<React.Fragment>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item'>
							<a href="/" className='nav-link'>Home</a>
						</li>
					</ul>
				</React.Fragment>
			</div>
		</nav>
	);
}

// Default Prop
Header.defaultProps = { 
	branding : 'My App'
}
export default Header;