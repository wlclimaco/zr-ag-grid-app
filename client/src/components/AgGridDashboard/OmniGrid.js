import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import { Icon } from 'semantic-ui-react';

import 'ag-grid-enterprise';
import rowData from './data.js';

import ActionColumnRenderer from './actionColumnRenderer.js';
import ActionColumnRenderer2 from './actionColumnRenderer2.js';
function currencyFormatter(params) {
	if (!params.value) return;
	return '$' + formatNumber(params.value);
}
function formatNumber(number) {
	return Math.floor(number)
		.toString()
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

class OmniGrid extends Component {
	constructor(props) {
		super(props);
		this.onGridReady.bind(this);
		this.state = {
			context: { componentParent: this },
			defaultColDef: {
				editable: false,
				suppressFilter: true,
				menuTabs: ['generalMenuTab']
			},
			columnDefs: [
				{
					headerName: 'Acct Exec',
					field: 'acctExec',
					lockPosition: true,
					cellClass: 'locked-col',
					pinned: 'left'
				},
				{
					headerName: 'Action',
					field: 'action',
					//cellRenderer: 'actionColumnRenderer',
					cellRendererSelector: params => {
						let firstRenderer = {
							component: 'actionColumnRenderer'
						};
						let secondRenderer = {
							component: 'actionColumnRenderer2'
						};
						if (params.data.estimator === 'Davis, Brian') {
							return firstRenderer;
						} else {
							return secondRenderer;
						}
					},
					colId: 'actionColumn'
				},
				{
					headerName: 'Client Name - Project',
					field: 'clientNameProject'
				},
				{
					headerName: 'Projected Order Date',
					field: 'projectedOrderDate'
					//type: 'dateColumn'
				},
				{
					headerName: 'Estimator',
					field: 'estimator'
				},
				{
					headerName: 'Proposal Due Date',
					field: 'proposalDueDate'
					//type: 'dateColumn'
				},
				{
					headerName: 'Status',
					field: 'status'
				},
				{
					headerName: 'Revenue',
					field: 'revenue',
					//width: 100,
					valueFormatter: currencyFormatter,
					//type: 'numberColumn',
					pinned: 'right'
				},
				{
					headerName: 'Project Type',
					field: 'projectType'
				}
			],
			rowData: [],
			//rowSelection: 'multiple',
			// columnTypes: {
			// 	numberColumn: {
			// 		width: 83
			// 	},
			// 	editableColumn: { editable: true },
			//},
			frameworkComponents: {
				actionColumnRenderer: ActionColumnRenderer,
				actionColumnRenderer2: ActionColumnRenderer2
			}
		};
	}
	onQuickFilterChanged() {
		this.gridApi.setQuickFilter(
			document.getElementById('quickFilter').value
		);
	}
	
	// sizeToFit() {
	// 	this.gridApi.sizeColumnsToFit();
	// }
	autoSizeAll() {
		var allColumnIds = [];
		this.columnApi.getAllColumns().forEach(function(column) {
			allColumnIds.push(column.colId);
		});
		this.columnApi.autoSizeColumns(allColumnIds);
	}

	// in onGridReady, store the api for later use
	onGridReady = params => {
		this.gridApi = params.api;
		this.columnApi = params.columnApi;
		this.autoSizeAll();
	};

	componentDidMount() {
		// fetch('https://api.myjson.com/bins/ly7d1')
		// 	.then(result => result.json())
		// 	.then(rowData => {
		// 		console.log('rowData: ', rowData);
		// 		this.setState({ rowData });
		// 	});
		this.setState({ rowData });
	}

	render() {
		return (
			<div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: 'auto',
					textAlign: 'left',
					boxSizing: 'border-box'
				}}
			>
				{/* <button onClick={this.sizeToFit.bind(this)}>
					Make columns fit screen
				</button>
				<button onClick={this.autoSizeAll.bind(this)}>
					Make columns expand
				</button> */}
				<input
					style={{ marginLeft: '35px' }}
					type="text"
					onInput={this.onQuickFilterChanged.bind(this)}
					id="quickFilter"
					placeholder="quick filter..."
				/>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					defaultColDef={this.state.defaultColDef}
					id="myGrid"
					rowData={this.state.rowData}
					//showToolPanel={true}
					enableStatusBar={true}
					alwaysShowStatusBar={false}
					onGridReady={this.onGridReady}
					enableSorting={true}
					enableFilter={true}
					//floatingFilter={true}
					//rowSelection={this.state.rowSelection}
					enableColResize={true}
					columnTypes={this.state.columnTypes}
					enableRangeSelection={true}
					suppressRowClickSelection={true}
					toolPanelSuppressPivotMode={true}
					toolPanelSuppressRowGroups={true}
					toolPanelSuppressValues={true}
					toolPanelSuppressPivots={true}
					suppressDragLeaveHidesColumns={true}
					suppressContextMenu={true}
					suppressMultiRangeSelection={true}
					rowHeight={40}
					frameworkComponents={this.state.frameworkComponents}
					context={this.state.context}
					// suppressMenuMainPanel={true}
					// suppressMenuColumnPanel={true}

					// enable delta updates (helps with performance on redux)
					//deltaRowDataMode={true}
					// return id required for delta updates
					//getRowNodeId={data => data.id}
					// dateComponentFramework={DateComponent}
				/>
			</div>
		);
	}
}

export default OmniGrid;
