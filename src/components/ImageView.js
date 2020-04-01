import React from 'react';
import './img.png';

class ImageView extends React.Component {
	state = {t : 160};
	render() {
		return (
			<span>
				<img src = {require('./img.png')} alt = "no picture" width = "250px" height = "250px" style = {{position: 'absolute', right: '8px', top:`${this.props.top}px`}} />
			</span>
		);
	}
}
export default ImageView;