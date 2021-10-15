import React, {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import * as apiService from "../apiService"
import ProductAggregate from "../domain/Product";
import {ProductComponent} from "../components/Product/ProductComponent";

interface ProductPageParams {
  productUuid: string
}

export const ProductPage: React.FC = () => {
  const {productUuid} = useParams<ProductPageParams>()

  const [product, setProduct] = useState<ProductAggregate>()

  useEffect(() => {
    apiService.getProduct(productUuid).then(setProduct)
  }, [productUuid])

  return <ProductComponent product={product} onProductChanged={setProduct} />
}