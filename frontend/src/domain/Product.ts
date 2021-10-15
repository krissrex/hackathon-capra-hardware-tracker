export interface Receipt {
  store: string;
  price: number;
  dateOfPurchase: Date;
  picture?: string;
}

export interface Product {
  producer: String;
  model: String;
  year: String;
  specs: String;
  condition: Condition;
  type: Type | string
}

export enum Type {
  PC,
  CELLPHONE,
  TABLET,
  KEYBOARD,
  HEADSET,
}

export enum Condition {
  AS_NEW,
  WORN,
  NEW,
}

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