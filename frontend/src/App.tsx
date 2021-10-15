import React, { useMemo } from "react";

import "./App.css";
import { Type, Condition, PriceCurve } from "shared-lib";
import { Column, useTable } from "react-table";
import ProductAggreagate from "shared-lib/dist/types/Product";

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

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default App;
