import React, { PureComponent, memo } from "react";
// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         {console.log("rendering?")}
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      {console.log("rendering?")}
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
