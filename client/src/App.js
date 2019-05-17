import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Switch>
          <Route exact path="/" components={ProductList} />
          <Route exact path="/" components={ProductList} />
          <Route exact path="/product/:id" components={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
