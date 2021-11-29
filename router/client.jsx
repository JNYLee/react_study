import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Lotto from "../picLotto/Lotto";
import ResponseCheck from "../reactSpeed/ResponseCheck_class";

ReactDOM.render(
  <BrowserRouter>
    {/* <Routes>
      <Route path="*" element={<MainRouter />}>
        <Route path="./path1" element={<Lotto />} />
        <Route path="./path2" element={<ResponseCheck />} />
      </Route>
    </Routes> */}
    <MainRouter />
  </BrowserRouter>,
  document.querySelector("#root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import App from "./example";
// ReactDOM.render(<App />, document.querySelector("#root"));
