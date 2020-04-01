import React from 'react';
import './NavigationBar.css';

import {HashRouter , Link , Route} from 'react-router-dom';
import ProfileDisplay from './ProfileDisplay';
import Display from './Display';
import Form from './Form';

class NavigationBar extends React.Component{
	render() {
		return (
			<HashRouter>
			<div>
				<h1 style = {{textAlign : 'center'}}>Welcome!!!</h1>
				
					<div className = "list-bar">
						<ol>
							<div className = "ui secondary menu" > 
								<li className = "item"><Link to = "/" className = "navlink-item">Home</Link></li>
								<li className = "item"><Link to = "/ProfileDisplay" className = "navlink-item">Profile</Link></li>
								<li className = "item"><Link to = "/Form" className = "navlink-item">Form</Link></li>
							</div>
						</ol>
					</div>
					<div className = "content">
						<Route exact path = "/" component = {Display}/>
						<Route path = "/ProfileDisplay" component = {ProfileDisplay}/>
						<Route path = "/Form" component = {(props) => <Form name = "S"/>}/>
					</div>
			</div>
			</HashRouter>
		);
	}
}
export default NavigationBar;