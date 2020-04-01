import React from 'react';
import FormDetails from './FormDetails';
class Form extends React.Component {
	state = {name: "", regd : "", submit: false}; 

	onFormSubmit = (e) => {
		const name = (this.state.name);
		const regd = (this.state.regd);
		this.state.submit = true;
		//console.log(this.state.name);
		this.forceUpdate();
	}
	
	render() {
		if(this.state.submit === false) {
			console.log("else");
			return (
				<div>
					<form onSubmit = {this.onFormSubmit} >
						<lable>Name:</lable>
						<input type = "text" onChange = {e => this.setState({name : e.target.value})} />
						<br />
						<lable>Regd No.:</lable>
						<input type = "text" onChange = {e => this.setState({regd : e.target.value})}/>
						<button>Submit</button>
					</form>
				</div>
			);
		}
		else{
			return <FormDetails name = {this.state.name} regd = {this.state.regd}/>;
		}
	}
}
export default Form;