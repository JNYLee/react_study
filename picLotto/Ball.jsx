import React, { memo, Component } from "react";
import { render } from "react-dom";

// const Ball = memo(({ number }) => {
//   let background;
//   if (number <= 10) {
//     background = "red";
//   } else if (number <= 20) {
//     background = "orange";
//   } else if (number <= 30) {
//     background = "yellow";
//   } else if (number <= 40) {
//     background = "blue";
//   } else {
//     background = "green";
//   }
//   return (
//     <div className="ball" style={{ background }}>
//       {number}
//     </div>
//   );
// });

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
      number: props.number,
    };
  }
  checkNumberColor = () => {
    const { number } = this.state;
    if (number <= 10) {
      this.setState({
        background: "red",
      });
    } else if (number <= 20) {
      this.setState({
        background: "orange",
      });
    } else if (number <= 30) {
      this.setState({
        background: "yellow",
      });
    } else if (number <= 40) {
      this.setState({
        background: "blue",
      });
    } else {
      this.setState({
        background: "green",
      });
    }
    return;
  };
  render() {
    const { number, background } = this.state;
    return (
      <div className="ball" style={{ background }}>
        {number}
      </div>
    );
  }
}

export default Ball;
