import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./MainComopnent/NavBar/NavBar";
import SmallForm from "./MainComopnent/SmallForm/SmallForm";
import SearchApi from "./MainComopnent/SearchUseEfect/SearchApi";
import Exper from "./MainComopnent/Exper/Exper";
import Performance from "./MainComopnent/Part3/Performance";
import MainComPar4 from "./MainComopnent/Part4/MainComPar4";
import { Provider } from "react-redux";
import {store} from "./MainComopnent/Part4/ReactReduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <App />
          </>
        }
      />
      <Route
        path="/formDemo"
        element={
          <>
            <SmallForm />
          </>
        }
      />
      <Route
        path="/useSearch"
        element={
          <>
            <SearchApi />
          </>
        }
      />
      <Route
        path="/preStea"
        element={
          <>
            <Exper />
          </>
        }
      />
      <Route
        path="/Performance"
        element={
          <>
            <Performance />
          </>
        }
      />
      <Route
        path="/redux"
        element={
          <>
            <Provider store={store}>
              <MainComPar4 />
            </Provider>
          </>
        }
      />
  
      
  
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
