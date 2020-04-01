import React from 'react';
import ImageView from './ImageView';

class Display extends React.Component {
	render() {
		return (
			<div>
				<p style = {{fontSize : '20px'}}>Click on profile menu in the menu bar to see some details...</p>
				<ImageView top = "120"/>
			</div>
		);
	}
}
export default Display;