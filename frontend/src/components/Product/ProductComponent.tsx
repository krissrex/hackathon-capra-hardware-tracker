import React from "react";
import ProductAggregate from "../../domain/Product";

export interface ProductProps {
  product?: ProductAggregate
}

export const ProductComponent: React.FC<ProductProps> = ({product}) => {

  return (product === undefined) ? <h1>Oops</h1> : <div>
    <h1>{product.product.producer} {product.product.model} fra {product.product.year}</h1>
    <span>Status: {product.product.status}</span>
  </div>
}