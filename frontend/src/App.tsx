import React, { useMemo } from "react";

import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import ProductAggregate, {
  Condition,
  PriceCurve,
  Type,
} from "./domain/Product";

function App() {
  const data = useMemo<ProductAggregate[]>(
    () => [
      {
        uuid: "42342-324234-4234-234-23",
        product: {
          producer: "Asus",
          model: "zenbook",
          year: "2018",
          specs: "super fancy quad core",
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
        uuid: "4234234-234324-234234-234423",
        product: {
          producer: "Apple",
          model: "macbook pro 15",
          year: "2018",
          specs: "super quad core",
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

  return <ProductList data={data} />;
}

export default App;
