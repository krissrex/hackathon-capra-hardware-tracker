import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductAggregate from '../../domain/Product'
import ProductList from '../ProductList/ProductList'

const apiLink = 'localhost:8080/api'

const ProductSearchPage: React.FC = () => {
  const [data, setData] = useState<ProductAggregate[] | undefined>()

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