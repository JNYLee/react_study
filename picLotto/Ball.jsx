import React, { memo, Component } from "react";
import { render } from "react-dom";

// const Ball = memo(({ number }) => {
//   let background;
//   if (number <= 10) {
//     background = 'red';
//   } else if (number <= 20) {
//     background = 'orange';
//   } else if (number <= 30) {
//     background = 'yellow';
//   } else if (number <= 40) {
//     background = 'blue';
//   } else {
//     background = 'green';
//   }
//   return (
//     <div className='ball' style={{ background }}>
//       {number}
//     </div>
//   );
// });

class Ball extends Component {
  render() {
    const { number } = this.props;
    let background;
    if (number <= 10) {
      background = "red";
    } else if (number <= 20) {
      background = "orange";
    } else if (number <= 30) {
      background = "yellow";
    } else if (number <= 40) {
      background = "blue";
    } else {
      background = "green";
    }

    return (
      <div>
        <div className="ball" style={{ background }}>
          {number}
        </div>
      </div>
    );
  }
}

export default Ball;
