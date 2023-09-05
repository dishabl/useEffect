import React from "react";
// import ChildComponent from "./ChildComponent";
// , { useState, useEffect }

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  render() {
    return (
      <div>
        <p>Эта строка пропадет, как только count станет равным 7</p>
      </div>
    );
  }
}

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
  };
  componentDidUpdate = () => {
    console.log(this.state.count);
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.count % 2 === 0) {
      console.log("shouldComponentUpdate");
    }
    return true;
  };

  render() {
    // console.log("render");
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
        <h3>count: {this.state.count}</h3>
        {this.state.count < 7 && <ChildComponent />}
      </div>
    );
  }
}

export default LifecycleComponent;
