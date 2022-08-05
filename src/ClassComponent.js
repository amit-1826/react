import { Component } from "react";

class ClassComponent extends Component {
    render() {
        return <h1>Message: {this.props.message}</h1>
    }
}

export default ClassComponent