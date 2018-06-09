import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
	{ key: '1', text: 'Option 1', value: 'option1' },
	{ key: '2', text: 'Option 2', value: 'option2' }
];

class CRMFilter extends Component {
	state = {};

	render() {
		return (
			<Form size="mini">
				<Form.Input
					fluid
					label="Filter Control #1"
					placeholder="Filter Control #1"
				/>
				<Form.Input
					fluid
					label="Filter Control #2"
					placeholder="Filter Control #2"
				/>
				<Form.Select
					fluid
					label="Filter Dropdown"
					options={options}
					placeholder="Filter Dropdown"
				/>
			</Form>
		);
	}
}

export default CRMFilter;
