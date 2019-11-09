import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
// CSS overrides
import './ResponsiveTable.css';


export class ResponsiveTable extends Component {
	rowIncludes(filter, row) {
		// all from the drop down returns everything
		if (filter.value === 'all') {
			return true;
		}
		// search for string anywhere in field
		const id = filter.pivotId || filter.id
		return row[id] !== undefined ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
	}

	render() {

		console.log(this.props.data)
		// const data = this.props.data.map(d => {
		// 	return d.recommendation_short = d.recommendation_full.split('.')[0];
		// });

		return (
			<ReactTable				
				className="-highlight"
				columns={[
					{
						Header: 'Responsible',
						accessor: 'who_implements',
						filterMethod: this.rowIncludes,
						Filter: (filter => {
							return (
								<select
									onChange={event => filter.onChange(event.target.value)}
									style={{ width: "100%" }}
									value={filter ? filter.value : "all"}
								>
									<option value="all">All</option>
									<option value="BC Lotteries Corporation">BCLC</option>
									<option value="Casino industry">Casinos</option>
									<option value="Ottawa">Feds</option>
									<option value="Province">Province</option>
								</select>
                    		)
						}),
						width: 100
					},
					{
						Header: 'Recommendation',
						accessor: 'recommendation_full',
						filterMethod: this.rowIncludes,
						width: 325
					},
					{
						Header: 'Target',
						accessor: 'target',
						filterMethod: this.rowIncludes
					},
					{
						Header: 'Status',
						accessor: 'status',
						filterMethod: this.rowIncludes,
						Filter: (filter => {
							return (
								<select
									onChange={event => filter.onChange(event.target.value)}
									style={{ width: "100%" }}
									value={filter ? filter.value : "all"}
								>
									<option value="all">All</option>
									<option value="Complete">Complete</option>
									<option value="Work Underway">Underway</option>
									<option value="Reviewing">Under Review</option>
									<option value="Not under consideration">Rejected</option>
								</select>
                    		)
						})
					}
					

				]}
				data={this.props.data}
				defaultPageSize={5}
				filterable={false}
				filterAll={false}
				showPageSizeOptions={false}
				showPaginationBottom={true}
				showPaginationTop={false}
				SubComponent={row => {
					return (
						<div className='sub-row'>
							<h3>{`Recommendation for ${row.original.target.toLowerCase()}`}</h3>
							<p>{row.original.recommendation_full}</p>
							<p className='source'>{`Source report: ${row.original.source_short.split(':')[0]}`}</p>
						</div>
					);
				}}
			/>

		);
	}
}

export default ResponsiveTable;
