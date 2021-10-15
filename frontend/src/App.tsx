import React, { useMemo } from "react";

import "./App.css";
import Card from "./components/Card";
import { Type, Condition, PriceCurve } from "shared-lib";

function App() {
  const data = useMemo(
    () => [
      {
        product: {
          producer: "Asus",
          model: "Asus zenbook",
          year: "2018",
          spect: "super fancu quad core",
          condition: Condition.AS_NEW,
          type: Type.PC,
        },
        receipt: {
          store: "Elkjøp",
          price: 29999,
          dateOfPurchase: new Date("02.03.2020"),
          picture: undefined,
        },
        priceCurve: PriceCurve.STANDARD,
        owners: [
          {
            fullName: "Per Persen",
            from: new Date("02.03.2020"),
          },
        ],
      },
      {
        product: {
          producer: "Asus",
          model: "Asus zenbook",
          year: "2018",
          spect: "super fancu quad core",
          condition: Condition.AS_NEW,
          type: Type.PC,
        },
        receipt: {
          store: "Elkjøp",
          price: 29999,
          dateOfPurchase: new Date("02.03.2020"),
          picture: undefined,
        },
        priceCurve: PriceCurve.STANDARD,
        owners: [
          {
            fullName: "Per Persen",
            from: new Date("02.03.2020"),
          },
        ],
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
      },
    ],
    []
  );

  var reactTable = require("react-table");
  
  const tableInstance = reactTable.useTable({ columns, data });

  return (
    <div className="App">
      <header className="App-header">
        <div className="Content">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Card>Dette er en tekst</Card>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
