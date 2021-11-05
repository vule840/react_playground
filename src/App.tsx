import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import EffectComponent from "./components/pages/EffectComponent";
import LocalStorage from "./components/pages/LocalStorage";
import RandomWrapper from "./components/RandomWrapper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route path="/random">
          <RandomWrapper />
        </Route>
        <Route path="/effects">
          <EffectComponent />
        </Route>
        <Route path="/localstorage">
          <LocalStorage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
