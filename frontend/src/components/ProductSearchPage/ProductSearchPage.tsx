import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductAggregate, { Condition, PriceCurve, Type } from '../../domain/Product'
import ProductList from '../ProductList/ProductList'

const apiLink = 'http://localhost:8080/api'


function useAxios(link: string){

}

const ProductSearchPage: React.FC = () => {
  console.log("Testing")
  const [data, setData] = useState<ProductAggregate[] | undefined>()

  const test = [
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
  ]

  console.log(JSON.stringify(test[0]))
  useEffect(()=>{
    async function fetchData(): Promise<ProductAggregate[]> {
      
      const response = await axios.get(apiLink + "/product");
      const allProducts = (response.data as any[]).map(product => {
          return {
            uuid: product.uuid,
            ...product.data
          } as ProductAggregate
      })
      return allProducts
    }
    fetchData().then(data => {
      setData(data)
    })
  }, [])
  

  if(data) {
    return <ProductList data={data}/>
  }else{
    return <div>Loading...</div>
  }
  
}

export default ProductSearchPage