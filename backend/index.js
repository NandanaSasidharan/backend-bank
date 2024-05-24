require('dotenv').config()// loads .env file contents into process .env by default.
//import express
const express = require('express');
//import cors
const cors = require('cors');
const router = require('./Router/route')
const db=require('./DB/connection')
const pfServer = express()
//use
pfServer.use(cors())
pfServer.use(express.json())//returns middleware that only parses json
//pfServer.use(appMiddleware)
pfServer.use(router)
const PORT = 4000 || process.env.PORT 
//server listen
pfServer.listen(PORT,()=>{
    console.log('listening on port' +PORT);
})
pfServer.get("/",(req,res)=>{
    res.send(`<h1>Project Fair Is Started....</h1>`)
})