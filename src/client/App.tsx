import React from "react";

import { MAGIC_NUMBER } from "@common/constants";

interface State {
  magicNumber: number;
}

export default class App extends React.Component<{}, State> {
  public state: State = {
    magicNumber: 0,
  };

  public async componentDidMount() {
    const res = await fetch("/api");
    this.setState({
      magicNumber: +(await res.text()),
    });
  }

  public render() {
    return (
      <div>
        Hello from the client! Our magic number is: {MAGIC_NUMBER}. The server says the magic number
        is: {this.state.magicNumber}.
      </div>
    );
  }
}
