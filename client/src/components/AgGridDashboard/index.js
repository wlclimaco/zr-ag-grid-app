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
		return [
			<Grid.Column key="Filter" width={2}>
				<StatusChart height={200} type="pie" />
				<Divider />
				<CRMFilter />
			</Grid.Column>,
			<Grid.Column key="Data" width={10}>
				<Grid columns={3}>
					<Grid.Column>
						<Segment>
							<StatusChart height={200} type="bar" />
						</Segment>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<Segment>
							<Statistic
								size="mini"
								label="Identified Need"
								value="$11,805,639.79"
							/>
						</Segment>
						<Segment>
							<Statistic
								size="mini"
								label="Verbal Award"
								value="$2,800,128.50"
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column>
						<Segment textAlign="center">
							<Statistic
								size="mini"
								label="Open Deals"
								value="241"
							/>
						</Segment>
						<Segment textAlign="center">
							<Statistic
								size="mini"
								label="Total Pipeline"
								value="$34,952,216.65"
							/>
						</Segment>
					</Grid.Column>
				</Grid>
				<Segment>
					<OmniGrid />
				</Segment>
			</Grid.Column>
		];
	}
}

export default Dashboard;
