import React from "react";
import ProductAggregate from "../../domain/Product";
import "./ProductComponent.css"
import Button from "../Button";
import {reserveProduct} from "../../apiService";

export interface ProductProps {
  product?: ProductAggregate;
  onProductChanged?: (product: ProductAggregate) => any;
}

export const ProductComponent: React.FC<ProductProps> = ({product, onProductChanged}) => {

  const onReserveClick = () => {
    if (product){
      console.log("Reserving", product.uuid)
      reserveProduct(product.uuid).then(newProduct => onProductChanged && onProductChanged(newProduct))
    }
  }

  return (product === undefined) ? <h1>Oops</h1> : <div>
    <h1>{product.product.producer} {product.product.model} fra {product.product.year}</h1>
    <div>
      <span>Status: {product.product.status}</span>
      {
        product.product.status === "IN_STORAGE"
        && (<><br/><Button onClick={onReserveClick}>Reserver</Button></>)
      }
    </div>

    <div>
      {product.product.productPictures.map(url =>
        <img src={url} width="400px" height="400px"/>
      )}
    </div>
    <span>Tilstand: {product.product.condition}</span>
    <h2>Egenskaper</h2>
    <div className="productSpecs">
      <span>{product.product.specs}</span>
    </div>
    <h2>Tidligere eiere</h2>
    <span>{product.owners.map(o => o.fullName).join(", ")}</span>
  </div>
}