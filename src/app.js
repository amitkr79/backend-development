import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  //.use is used to handle middleware in future and this .json means we can take json data 

app.use(express.urlencoded({extended: true , limit: "16kb"})) //.urlencoded for url address

app.use(express.static("public")) // here we can put data for public if we want 

app.use(cookieParser())



export {app}