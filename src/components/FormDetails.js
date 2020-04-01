import React from 'react';
class FormDetails extends React.Component {

	render() {
		return (
			<div>
				<h3> Name : {this.props.name} </h3>
				<h3> Regd : {this.props.regd} </h3>
			</div>
		);
	}
}
export default FormDetails;