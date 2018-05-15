import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:'',
			passwordRepeat:''
		}
	}

	handleClick(event) {
		event.preventDefault();
		if (this.state.password === this.state.passwordRepeat){
			alert("Success!")
		} else {
			alert("Passwords missmatch!")
		}
	}

	render() {
		return (
			<div>
				<div>
					Register
				</div>
				<label>Username</label>
				<input
					type="text"
				/>
				<br/>
				<label>Password</label>
				<input
					type="password"
					onChange = {(event) =>
						this.setState({password:event.target.value})}
				/>
				<br/>
				<label>Repeat password</label>
				<input
					type="password"
					onChange = {(event) =>
						this.setState({passwordRepeat:event.target.value})}
				/>
				<br/>
				<button
					onClick={(event)=>this.handleClick(event)}
				>
				Submit
				</button>
			</div>
		)
	}
}

export default Register;