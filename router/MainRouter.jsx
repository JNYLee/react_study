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
import RouterBundle from "./routerBundle";
const MainRouter = () => {
  return (
    <>
      <nav>
        <Link to="/game/path1">로또 추첨</Link>
        <p></p>
        <Link to="/game/path2">반응속도 체크</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/game/:name" element={<RouterBundle />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRouter;
