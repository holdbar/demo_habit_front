import React from 'react';
import HabitCheck from './HabitCheck';
import Habit from './Habit';

class Habits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			habits:["smoke", "drink",],
			habit:""
		}

		this.addHabit = this.addHabit.bind(this)
		this.showCheck = this.showCheck.bind(this)
	}

	addHabit(event) {
		event.preventDefault();
		var newHabit = document.getElementById("newHabit")
		var habitArray = this.state.habits;

		if (newHabit.value !== "") {
			habitArray.unshift(newHabit.value);
			this.setState({habits:habitArray});
			console.log(this.state.habits)
		} else {
			alert("Empty habit!!!");
		}
		
		newHabit.value = "";
	}

	showCheck(event) {
		event.preventDefault();
		var dialogMessage = `Do you want to check "${event.target.getAttribute("value")}" habit for today?`;
		document.querySelector("#dialog-habit").innerHTML = dialogMessage;
		this.setState({habit:`${event.target.getAttribute("value")}`});
        document.querySelector("dialog").showModal();
    }

	render() {
		return (
			<div>
				<div>
					Habits
				</div>
				<form onSubmit={this.addHabit}>
					<input
						id="newHabit"
						type="text"
					/>
					<button type="submit">Add</button>
				</form>
				<hr/>
				<ul>
					{this.state.habits.map((habit, key)=><Habit 
															id={key}
															value={habit}
															showCheck={this.showCheck}
															habit={habit}
															/>)}
				</ul>
				<HabitCheck habit={this.state.habit}/>
			</div>
		)
	}
}

export default Habits;
