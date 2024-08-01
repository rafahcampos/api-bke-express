//const express = require('express')
import express from ('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/user', (req,res)=>{
    res.json({nome:"rafael", email: "rafael@gmail.com.br"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})