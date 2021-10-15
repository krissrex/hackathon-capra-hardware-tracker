import ProductAggregate from "./domain/Product";


export const testData: ProductAggregate[] = [
  {
    uuid: "42342-324234-4234-234-23",
    product: {
      producer: "Asus",
      model: "zenbook",
      year: "2018",
      specs: "super fancy quad core",
      condition: 'AS_NEW',
      type: 'PC',
      status: "IN_STORAGE",
      productPictures: [
        "https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger/public/field/image/2018/01/zenbook-13-ux331ual.jpg"
      ],
    },
    receipt: {
      store: "Elkjøp",
      price: 29999,
      dateOfPurchase: new Date("02.03.2020"),
      picture: undefined,
    },
    priceCurve: 'STANDARD',
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
      condition: 'AS_NEW',
      type: 'PC',
      status: "BOUGHT_OUT",
      productPictures: [],
    },
    receipt: {
      store: "Elkjøp",
      price: 29999,
      dateOfPurchase: new Date("02.03.2020"),
      picture: undefined,
    },
    priceCurve: 'STANDARD',
    owners: [
      {
        fullName: "Per Persen",
        from: new Date("02.03.2020"),
      },
    ],
  },
]

console.log(JSON.stringify(testData[0]))
