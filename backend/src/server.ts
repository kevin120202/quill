import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middleware/errorHandler"

// Routes
import journalRoutes from "./routes/journal"
import authRoutes from "./routes/auth"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true }))
app.use(cookieParser())

app.use("/api/journals", journalRoutes)
app.use("/api/auth", authRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})