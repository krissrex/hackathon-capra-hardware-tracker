import React from "react";
import "./App.css";
import {ProductPage} from "./page/ProductPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ProductSearchPage from "./components/ProductSearchPage/ProductSearchPage";

function App() {

  return <Router>
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
        <Route path="/">
          <h1>TODO Welcome</h1>
        </Route>
        <Route path="/new">
          <h1>TODO new</h1>
        </Route>
        <Route path="/search">
          <h1>TODO search</h1>
        </Route>
        <Route path="/product/:uuid">
          <ProductPage />
        </Route>

      </Switch>
    </div>
  </Router>;
}

export default App;
