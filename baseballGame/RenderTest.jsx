import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  onClick = () => {
    const obk = this.state.array[0].inside;
    obj.push(4);
    this.setState({
      object: { ...this.state.object },
    });
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onCLick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
