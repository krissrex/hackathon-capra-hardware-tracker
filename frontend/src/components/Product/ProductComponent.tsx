import React from "react";
import ProductAggregate from "../../domain/Product";

export interface ProductProps {
  product: ProductAggregate
}

export function ProductComponent(): React.FC<ProductProps> {

  return <div>

  </div>
}