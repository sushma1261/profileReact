import React from 'react';
import './NavigationBar.css';

const Sample = (props) => {
		return (
			<div>
				<table className = "table-item" align = "center">
					<tbody>
						<tr className = "row-item">
							<td>{props.names}</td>
							<td>{props.values}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
}

export default Sample;	