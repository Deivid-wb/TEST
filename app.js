const express = require('express')
const app = express()
const port = 3500

app.get('/',(req,res)=>{
    res.send('HOLA MUNDO!')
})
app.get('/hello',(req,res)=>{
    res.status(200).json({message:'HELLO'})
})
app.listen(port)