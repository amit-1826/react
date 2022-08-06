import { Component } from "react";

class ClassComponent extends Component {
    render() {
        const {message1, message2} = this.props;
        return <h1>Message: {message1} {message2}</h1>
    }
}

export default ClassComponent