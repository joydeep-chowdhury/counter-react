import { Component } from "react";
import './CounterButton.css'
import PropTypes from 'prop-types'

export class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);    //arrow function doesnot need binding
        this.decrement = this.decrement.bind(this);
    }

    render = () => {
        return (
            <div className="CounterButton">
                <button onClick={this.increment} className="buttonnormal">+{this.props.by}</button>
                <button onClick={this.decrement} className="buttonnormal">-{this.props.by}</button>
            </div>
        );
    }

    increment() {
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 100
}

CounterButton.propTypes = {
    by: PropTypes.number
}
