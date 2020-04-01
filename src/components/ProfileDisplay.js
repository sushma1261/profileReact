import React from 'react';
import Sample from './Sample';
import ImageView from './ImageView';

class ProfileDisplay extends React.Component {
	render() {
		return (
			<div>
				<h1 style = {{textAlign : 'center'}}>My Profile Details</h1>
				<Sample names = "Name" values = "Sushma" />
				<Sample names = "Regd No." values = "16B01A1261" />
				<Sample names = "Marks" values = "9.09" />
				<ImageView top = "160"/>
			</div>
			);
	}
}
export default ProfileDisplay;
