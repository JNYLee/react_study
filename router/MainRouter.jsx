import React from "react";
import {
  Link,
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Lotto from "../picLotto/Lotto";
import ResponseCheck from "../reactSpeed/ResponseCheck_class";
const MainRouter = () => {
  return (
    <>
      <nav>
        <Link to="/path1">로또 추첨</Link>
        <p></p>
        <Link to="/path2">반응속도 체크</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/path1" element={<Lotto />} />
          <Route path="/path2" element={<ResponseCheck />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRouter;
