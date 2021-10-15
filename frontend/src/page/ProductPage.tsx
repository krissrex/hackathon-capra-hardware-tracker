import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

interface ProductPageParams {
  productUuid: string
}

export const ProductPage: React.FC = () => {
  const {productUuid} = useParams<ProductPageParams>()

  const [product, setProduct] = useState()
  useEffect(() => {

  }, [])

  return <h1>Hello</h1>
}