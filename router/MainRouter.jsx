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
      <div>
        <nav>
          <Link to="game/">게임 모음</Link>
        </nav>
        <Routes>
          <Route path="/game/*" element={<RouterBundle />} />
        </Routes>
      </div>
    </>
  );
};

export default MainRouter;
