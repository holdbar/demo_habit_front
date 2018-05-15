import React from 'react';

class HabitCheck extends React.Component {
    constructor(props) {
        super(props)

        //TODO: remove if do not use props in these funcs
        this.confirmCheck = this.confirmCheck.bind(this)
        this.cancelCheck = this.cancelCheck.bind(this)

    }

    cancelCheck(event) {
        event.preventDefault();
        document.querySelector("dialog").close()
        console.log("Canceled.")
    }

    confirmCheck(event) {
        event.preventDefault();
        document.querySelector("dialog").close();
        console.log(`"${this.props.habit}" habit is checked for today`)
    }
    

    render() {
        return (
            <dialog>
		        <p id="dialog-habit"></p>
		        <button onClick={this.confirmCheck}>Ok</button>
		        <button onClick={this.cancelCheck}>Cancel</button>
	        </dialog>
        )
    }
}

export default HabitCheck;