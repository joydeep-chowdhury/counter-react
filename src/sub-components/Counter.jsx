import { Component } from "react";
import { CounterButton } from './CounterButton';

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);    //arrow function doesnot need binding
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render = () => {
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="buttonreset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

    increment(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            });
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            });
    }

    reset(){
        this.setState(
            (prevState) => {
                return { counter: 0 }
            });
    }
}