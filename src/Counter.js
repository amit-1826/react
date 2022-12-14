import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    render() {
        return <div>
            <h3>Counter is: {this.state.counter}</h3>
            <button onClick={this.incrementCounter}>Click</button>
        </div>
    }

    incrementCounter = () => {
        console.log(this);
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default Counter;