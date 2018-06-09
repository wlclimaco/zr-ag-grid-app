import React, { Component } from 'react';
import { Icon, Button, Popup, Header, Grid } from 'semantic-ui-react';

export default class ActionColumnRenderer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		//return <Button style={{ backgroundColor: 'salmon' }} icon="home" />;
		return (
			<Popup
				trigger={<Button style={{backgroundColor: 'cyan'}}>Show flowing popup</Button>}
				on={['hover', 'click']}
				flowing
				hoverable
				position="right center"
			>
				<Grid centered divided columns={2}>
					<Grid.Column textAlign="center">
						<Button><b>Send to Pipeline</b></Button>
					</Grid.Column>
					<Grid.Column textAlign="center">
						<Button><b>Delete</b></Button>
					</Grid.Column>
				</Grid>
			</Popup>
		);
	}
}
