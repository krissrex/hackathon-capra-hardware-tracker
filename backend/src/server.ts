import express from "express";
import cors from "cors"
import {connect, Product} from "@/db";

const PORT=8080

async function main() {
  const app = express()
  app.use(express.json())
  app.use(cors())

  await connect()

  app.get("/api/product", async (req, res) => {
    const query = req.query // Not a good thing for production.

    const products = await Product.findAll({where: {data: {...query}}})
    res.json(products)
  })

  app.post("/api/product", async (req, res) => {
    const product = await Product.create({
      data: req.body
    })
    res.status(201).json({status: "ok", product})
  })

  app.delete("/api/product/:uuid", async (req, res) => {
    const uuid = req.params.uuid
    await Product.destroy({where: {uuid}})
    res.json({status: "deleted"})
  })

  app.get("/api/product/:uuid", async (req, res) => {
    const uuid = req.params.uuid
    const product = await Product.findOne({where: {uuid}})
    res.json(product)
  })

  app.post("/api/product/:uuid/reserve", async (req, res) => {
    const uuid = req.params.uuid
    const product = await Product.findOne({where: {uuid}})
    const data = product.getDataValue("data")
    data.product.status = "RESERVED"
    product.setDataValue(data, data)
    await product.save()
    res.json(product)
  })

  return app
}

main().then(app => {
  console.log(`Listening to ${PORT}`)
  app.listen(PORT)
})
