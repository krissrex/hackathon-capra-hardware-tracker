import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ProductSearchPage from "./components/ProductSearchPage/ProductSearchPage";

function App() {
  return <ProductSearchPage />;
}

export default App;
