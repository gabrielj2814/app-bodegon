import express from "express";
import path from "path"
import cors from "cors"
import dotEnv from "dotenv"
import logger from "morgan"
dotEnv.config({path: path.resolve(__dirname, "../.env")})

const {PORT,NODE_ENV} = process.env
const app = express()
// set
app.set("port",PORT || 5000)
// middliware
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../public")))
// routes

export default app