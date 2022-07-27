import React from 'react'

export default class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
        // Bind this with increment method 
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <>
                <h1>Counter Class</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Inc</button>
                <button onClick=
                    {() => this.setState({ counter: this.state.counter - 1 })}>Dec</button>
            </>
        )
    }
}
