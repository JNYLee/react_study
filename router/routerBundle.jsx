import React, { Component } from "react";
import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Lotto from "../picLotto/Lotto";
import ResponseCheck from "../reactSpeed/ResponseCheck_class";
class RouterBundle extends Component {
  render() {
    console.log("this props: ", this.props);
    return (
      <>
        <div>
          {/* <Routes>
            <Route path="/game/path1" element={<Lotto />} />
            <Route path="/game/path2" element={<ResponseCheck />} />
          </Routes> */}
          <Lotto />
          <ResponseCheck />
        </div>
      </>
    );
  }
}

export default RouterBundle;
