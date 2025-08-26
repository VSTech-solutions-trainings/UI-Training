import { Component } from "react";

class UserInfo extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      count: 0,
    };
  }

  //Show a message in the logs after the component is rendered or mounted on the UI.

  componentDidMount() {
    console.log("UI mounted");
    this.setState(function (prevState) {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidUpdate() {
    console.log("UI updated");
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <p>This is a User Info component</p>
      </>
    );
  }
}

export default UserInfo;
