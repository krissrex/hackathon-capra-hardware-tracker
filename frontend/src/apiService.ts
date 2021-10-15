import axios from "axios";
import ProductAggregate from "./domain/Product";


const Axios = axios.create({
  baseURL: "http://localhost:8080/api/"
})

export async function getAllProducts(): Promise<ProductAggregate[]> {
  return [] //TODO
}

export async function getProduct(productUuid: string): Promise<ProductAggregate> {
  const response = await Axios.get("product/" + productUuid)
  const data = response.data as any
  return {
    ...data.data,
    uuid: data.uuid
  } as ProductAggregate
}

export async function reserveProduct(productUuid: string): Promise<ProductAggregate> {
  const response = await Axios.post("product/" + productUuid + "/reserve")
  const data = response.data as any
  return {
    ...data.data,
    uuid: data.uuid
  } as ProductAggregate
}