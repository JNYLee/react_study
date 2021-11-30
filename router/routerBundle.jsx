import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NumberBaseball from "../baseballGame/NumberBaseball_class";
import Lotto from "../picLotto/Lotto";
import ResponseCheck from "../reactSpeed/ResponseCheck_class";
import App from "./example";
function RouterBundle() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="path1">로또 추첨</Link>
          </li>
          <br />
          <li>
            <Link to="path2">반응속도 체크</Link>
          </li>
          <br />
          <li>
            <Link to="path3">숫자야구게임</Link>
          </li>
          <br />
          {/* <li>
            <Link to="path4">테스트 파일</Link>
          </li>
          <br /> */}
        </ul>
      </nav>
      <Routes>
        <Route path="path1" element={<Lotto />} />
        <Route path="path2" element={<ResponseCheck />} />
        <Route path="path3" element={<NumberBaseball />} />
        <Route path="path4" element={<App />} />
      </Routes>
    </div>
  );
}

export default RouterBundle;
