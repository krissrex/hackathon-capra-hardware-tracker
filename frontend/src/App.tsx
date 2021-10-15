import React, { useMemo } from "react";

import "./App.css";
import Table from "./components/Table/Table";
import ProductAggregate, {
  Condition,
  PriceCurve,
  Type,
} from "./domain/Product";

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

  return (
    <Table<ProductAggregate>
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
