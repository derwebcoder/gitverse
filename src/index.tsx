import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RepositoryPage } from "./pages/RepositoryPage/RepositoryPage";
import { BasicLayout } from "./layouts/BasicLayout";

ReactDOM.render(
  <React.StrictMode>
    <BasicLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/repo/:owner/:name" element={<RepositoryPage />} />
        </Routes>
      </BrowserRouter>
    </BasicLayout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
