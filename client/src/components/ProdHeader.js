import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class ProdHeader extends Component {
	render() {
		return (
			<Menu fluid>
				<Menu.Item>
					<Link to={'/'}>AG-GRID</Link>
				</Menu.Item>
			</Menu>
		);
		// return (
		// 	<nav>
		// 		<div className="nav-wrapper">
		// 			<Link to={'/'} className="left brand-logo">
		// 				AG-GRID
		// 			</Link>
		// 		</div>
		// 	</nav>
		// );
	}
}

// function mapStateToProps(auth) {
// 	return auth;
// }
//connect to store stuff if auth is involved
export default ProdHeader;
