import React, { useMemo } from "react";

import "./App.css";
import { Type, Condition, PriceCurve } from "shared-lib";
import { Column, useTable } from "react-table";
import ProductAggreagate from "shared-lib/dist/types/Product";
import Table from "./components/Table/Table";

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

  const columns = useMemo<Column<ProductAggreagate>[]>(
    () => [
      {
        Header: "Product",
        accessor: "product",
      },
      {
        Header: "Product",
        accessor: "product",
      },
    ],
    []
  );

  return (
    <Table<ProductAggreagate>
      columns={[
        {
          Header: "Product",
          accessor: "product",
        },

        {
          Header: "Product",
          accessor: "product",
        },
      ]}
      data={data}
    />
  );
}

export default App;
