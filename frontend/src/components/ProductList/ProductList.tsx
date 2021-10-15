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
      id: "link",
      accessor: "product",
      Cell: (it) => <a href={'www.google.no'}><Button>Gå til produkt</Button></a>,
    },
  ]}
  data={data}
/>

}

export default ProductList