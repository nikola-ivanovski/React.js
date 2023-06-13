import { Component } from "react";
import "./Counter.scss";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleInputChange = (event) => {
    this.setState({ count: parseInt(event.target.value) });
  };

  render() {
    const { count } = this.state;
    const isEven = count % 2 === 0;

    return (
      <div className="counter">
        <p>Count: {count}</p>
        <span>{isEven ? "Even" : "Odd"}</span>
        <br />
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleReset()}>Reset</button>
        <br />
        <input type="number" value={count} onChange={this.handleInputChange} />
      </div>
    );
  }
}
