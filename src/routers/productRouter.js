import express from "express";

const router = express.Router(); //criando o roteador

router.get('/', (req, res) => {
    res.json('Rota GET /product')
  })
  
  router.post('/', (req, res) => {
    res.json('POST /product')
  })
  
  router.put('/alterar', (req, res) => {
    res.json('PUT /product')
  })
  
  router.patch('/alterarParte', (req, res) => {
    res.json('PATH /product')
  })
  
  router.delete('/deletar', (req, res) => {
    res.json('DELETAR /product')
  })

export default router;
