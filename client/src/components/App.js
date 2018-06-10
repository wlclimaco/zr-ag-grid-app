//ROUTING STUFF

import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProdHeader from './ProdHeader';
//import AgGridComponent from './AgGridComponent';
import AgGridDashboard from './AgGridDashboard/index';
import Landing from './Landing';

const Dashboard = () => {
	return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
	return <h2>Survey New</h2>;
};

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						{(() => {
							if (process.env.NODE_ENV !== 'production') {
								return [
									<ProdHeader />,
									<Route
										exact
										path="/"
										component={Landing}
									/>,
									<Route
										exact
										path="/surveys"
										component={Dashboard}
									/>,
									<Route
										path="/surveys/new"
										component={SurveyNew}
									/>,
									<Route
										path="/leads"
										component={AgGridDashboard}
									/>
								];
							} else {
								return [
									<ProdHeader />,
									<Route
										exact
										path="/"
										component={AgGridDashboard}
									/>
								];
							}
						})()}
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
