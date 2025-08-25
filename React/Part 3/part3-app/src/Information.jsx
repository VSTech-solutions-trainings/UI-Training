import { Component } from "react";

class Information extends Component {
  constructor() {
    super();
    this.changeCount = this.changeCount.bind(this);
    this.state = {
      count: 0,
    };
  }

  changeCount() {
    this.setState(function (prevCount) {
      return {
        count: prevCount.count + 1,
      };
    });
    console.log(this.count);
  }

  render() {
    return (
      <>
        <p>This is a Information Component</p>
        <button onClick={this.changeCount}>Increment count</button>
        <p>Count value is {this.state.count}</p>
      </>
    );
  }
}

export default Information;
