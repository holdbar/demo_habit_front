import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}

	handleClick(event) {
		event.preventDefault();
		if (this.state.password === "qwerty123") {
			alert("Success!")
			window.localStorage.setItem("Logged", "3");
			console.log(window.localStorage.getItem("Logged"));
		} else {
			alert("Password missmatch!")
		}
	}

	render() {
		return (
			<div>
				<div>
					Login
				</div>
				<label>Username</label>
				<input
					type="text"
					onChange = {(event) => 
						this.setState({username:event.target.value})}
				/>
				<br/>
				<label>Password</label>
				<input
					type="password"
					onChange = {(event) =>
						this.setState({password:event.target.value})}
				/>
				<br/>
				<button
					onClick={(event) => this.handleClick(event)}>
					Submit
				</button>
			</div>
		)
	}
}

export default Login;