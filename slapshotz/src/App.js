import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Login from "./components/pages/Login"
import Home from "./components/pages/Home";
import Buy from "./components/pages/Buy";
import Sell from "./components/pages/Sell";
import Categories from "./components/pages/Categories";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/sell" component={Sell} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
