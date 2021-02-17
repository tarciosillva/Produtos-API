const { Router } = require('express')
const express = require('express')
const app = express()

const router = require('./src/routes/routes')
require('dotenv').config()

app.use(express.json())
app.use(router) 

app.get("/", (req, res)=>{
    res.send("API de produtos gerais")
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log("Server is running port: " + port)
})