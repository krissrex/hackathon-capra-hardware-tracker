import React from 'react'
import ProductAggregate from '../../domain/Product'
import Button from '../Button'
import Table from '../Table/Table'


interface Props{
  data: ProductAggregate[];
}

const ProductList: React.FC<Props> = ({data}) => {

  return <Table<ProductAggregate>
    columns={[
    {
      Header: "Type",
      id: "type",
      accessor: "product",
      Cell: (it) => <div>{it.value.type}</div>,
    },
    {
      Header: "Produsent",
      id: "produsent",
      accessor: "product",
      Cell: (it) => <div>{it.value.producer}</div>,
    },
    {
      Header: "Modell",
      id: "modell",
      accessor: "product",
      Cell: (it) => <div>{it.value.model}</div>,
    },
    {
      Header: "Årsmodell",
      id: "aar",
      accessor: "product",
      Cell: (it) => <div>{it.value.year}</div>,
    },
    {
      Header: "Specs",
      id: "specs",
      accessor: "product",
      Cell: (it) => <div>{it.value.specs}</div>,
    },
    {
      Header: "Status",
      id: "status",
      accessor: "product",
      Cell: (it) => <div>{it.value.status}</div>,
    },
    {
      id: "link",
      accessor: "product",
      Cell: (it) => <a href={'/product/' + it.row.original.uuid}><Button margin={false}>Gå til produkt</Button></a>,
    },
  ]}
  data={data}
/>

}

export default ProductList