import React from "react";

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

let options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpc2hhYmxAZXhhbXBsZS5jb20iLCJpZCI6MjA5LCJpYXQiOjE2OTQxNzExNjZ9.RoqUqAz_ipvTHIUCSBmvq2_oOQOO6NZmbSln413rubg",
  },
};

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.state1 = {
      leeds: [],
    };
  }

  fetchData = async () => {
    const leeds = await fetch(
      "https://todo-redev.herokuapp.com/api/todos?isCompleted=false",
      options
    );
    const data = await leeds.json();
    console.log(data);
  };

  componentDidMount = () => {
    this.fetchData();
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
