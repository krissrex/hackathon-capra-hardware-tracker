import React from "react";
import "./App.css";
import { ProductPage } from "./page/ProductPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSearchPage from "./components/ProductSearchPage/ProductSearchPage";
import CreateProductPage from "./components/CreateProductPage/CreateProductPage";

import "./TestData"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Add new</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/new">
            <CreateProductPage />
          </Route>
          <Route path="/search">
            <ProductSearchPage />
          </Route>
          <Route path="/product/:productUuid">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
