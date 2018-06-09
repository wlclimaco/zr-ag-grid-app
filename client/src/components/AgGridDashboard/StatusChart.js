import React, { Component } from 'react';
import ReactChartkick, { PieChart, BarChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

class StatusChart extends Component {
	renderChartType({ type, width, height }) {
		const data = [
			['Identified Need', 44],
			['Submitted Quote', 23],
			['High Probability', 14],
			['Verbal Award', 10],
			['Closed Business', 50]
		];

		const libraryOptions = {
			animation: {
				animateRotate: true
			}
		};

		switch (type) {
			case 'bar':
				return (
					<BarChart
						data={data}
						width={width}
						height={height}
						legend="bottom"
						library={libraryOptions}
					/>
				);
			case 'pie':
				return (
					<PieChart
						data={data}
						width={width}
						height={height}
						legend="bottom"
						library={libraryOptions}
					/>
				);
			default:
				return (
					<BarChart
						data={data}
						width={width}
						height={height}
						legend="bottom"
						library={libraryOptions}
					/>
				);
		}
	}
	render() {
		return <div>{this.renderChartType(this.props)}</div>;
	}
}

export default StatusChart;
