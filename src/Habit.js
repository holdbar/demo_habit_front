import React from 'react';

class Habit extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <li 
                key={this.props.id} 
                value={this.props.habit}
                onClick={this.props.showCheck}>{this.props.habit}</li>
        )
    }
}

export default Habit;