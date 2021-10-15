import express from "express";
import {connect, Product} from "@/db";

const PORT=8080

async function main() {
  const app = express()
  app.use(express.json())

  await connect()

  app.get("/api/product", async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
  })

  app.post("/api/product", async (req, res) => {
    await Product.create({
      data: req.body
    })
    res.status(201).json({status: "ok"})
  })

  return app
}

main().then(app => {
  console.log(`Listening to ${PORT}`)
  app.listen(PORT)
})
