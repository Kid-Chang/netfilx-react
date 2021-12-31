import React from "react";
import "./App.css";
import BeforePage from "./BeforePage";
import MainPage from "./MainPage";
import UserSelectPage from "./UserSelectPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeforePage />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="/UserSelect" element={<UserSelectPage />} />
        </Routes>
      </BrowserRouter>
      {/* style={{color: "red"}} */}
      {/* <BeforePage/> */}
      {/* <MainPage/> */}
      {/* <UserSelectPage/> */}
    </div>
  );
}

export default App;
