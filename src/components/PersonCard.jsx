import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked() {
        this.props.handleClick(this.props.person.id);
    }
    render() {
        const {fName, lName, age, hairColor } = this.props.person;
        return (
            <div>
                <h1>{lName}, {fName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.buttonClicked}>Birthday Button for {fName} {lName}</button>
            </div>
        );
    }
}

export default PersonCard;