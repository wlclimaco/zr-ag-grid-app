import React, { Component } from 'react';

// TODO: move up the component dependencies
import CRMFilter from './CRMFilter';
import StatusChart from './StatusChart';
import { Grid, Segment, Statistic, Divider } from 'semantic-ui-react';
import OmniGrid from './OmniGrid';

class Dashboard extends Component {
	render() {
		// return an array so the columns render correctly,
		// a wrapper div would change the column styling
		return (
			<Grid>
				<Grid.Column key="Filter" width={2}>
					<CRMFilter />
				</Grid.Column>,
				<Grid.Column key="Data" width={13}>
					<Segment>
						<OmniGrid />
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Dashboard;
