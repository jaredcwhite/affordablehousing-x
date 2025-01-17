import Application from "koa"
import cors from "@koa/cors"
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

const config = {
  port: parseInt(process.env.PORT || "3001", 10)
}

import archer from "../listings/archer.json"
import gish from "../listings/gish.json"
import triton from "../listings/triton.json"
const data = { status: "ok", listings: [triton, gish, archer] }

const app = new Application()

// TODO: app.use(logger(winston));
app.use(cors())

app.use(ctx => {
  ctx.body = data
})

const server = app.listen(config.port)
console.log(`Server running on port ${config.port}`)
