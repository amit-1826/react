import { Component } from "react";

class FunctionalEventClass extends Component {
    render() {
        return (
        <div>
            This is a class functional component.
            <button onClick={this.handleClick}>Click</button>
        </div>
        )
    }

    handleClick() {
        console.log(this);
        console.log('button is clicked');
    }
}

export default FunctionalEventClass;