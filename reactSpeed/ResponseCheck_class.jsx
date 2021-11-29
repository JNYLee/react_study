import React, { Component } from "react";
class ResponseCheck extends Component {
  state = {
    commandText: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  };

  timeout = null;
  startTime;
  endTime;

  onClickScreen = () => {
    const { commandText } = this.state;
    if (commandText === "waiting") {
      this.setState({
        commandText: "ready",
        message: "초록색이 되면 클릭하세요",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          commandText: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (commandText === "ready") {
      clearTimeout(this.timeout);
      this.setState({
        commandText: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요.",
      });
    } else if (commandText === "now") {
      this.endTime = new Date();
      this.setState((prevResult) => {
        return {
          commandText: "waiting",
          message: "클릭해서 시작하세요.",
          result: [...prevResult.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        평균 시간:
        {result.reduce((a, c) => a + c) / result.length}
        ms
      </div>
    );
  };
  render() {
    const { commandText, message } = this.state;
    return (
      <>
        <div id="screen" className={commandText} onClick={this.onClickScreen}>
          {message}
        </div>
        <div>{this.renderAverage()}</div>
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  }
}

export default ResponseCheck;
