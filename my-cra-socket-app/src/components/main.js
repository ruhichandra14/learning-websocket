import React, { Component } from "react";
import socketIOClient from "socket.io-client";
export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data =>
      this.setState({ response: data }, () => {
        console.log("res...",this.state.response);
      })
    );
  }

  render() {
    const { response } = this.state;
    console.log("response ",response);
    return (
        <div>
                The temperature is
        </div>
    );
  }
}
