import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						AG-GRID
					</a>
					<ul id="nav-mobile" className="right">
						<li>
							<a>Login Wih Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
