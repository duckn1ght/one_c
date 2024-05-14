const express = require('express')
const db = require('./db')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.listen(port , ()=> console.log('> Сервер запущен на порте: ' + port))