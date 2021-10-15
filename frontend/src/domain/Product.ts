export type ImageDataUri = string

export interface Receipt {
  store: string;
  price: number;
  dateOfPurchase: Date;
  picture?: ImageDataUri;
}

export interface Product {
  producer: String;
  model: String;
  year: String;
  specs: String;
  condition: Condition;
  type: Type | string;
  status: ProductStatus;
  productPictures: ImageDataUri[]
}

export type ProductStatus = "BOUGHT_OUT" | "OWNED" | "IN_STORAGE" | "RESERVED"

export type Type = "PC"
  | "CELLPHONE"
  | "TABLET"
  | "KEYBOARD"
  | "HEADSET"

export type Condition = "AS_NEW"
  | "WORN"
  | "NEW"


export interface Owner {
  fullName: String;
  from: Date;
  to?: Date;
}

export enum PriceCurve {
  STANDARD,
}

export default interface ProductAggregate {
  uuid: string;
  receipt: Receipt;
  product: Product;
  priceCurve: PriceCurve;
  owners: Owner[];
}