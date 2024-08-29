import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"

// Routes
import journalRoutes from "./routes/journal"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/journals", journalRoutes)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})