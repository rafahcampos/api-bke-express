import express from "express";

const router = express.Router(); //criando o roteador

router.get('/', (req, res) => {
    res.json('Rota GET no /product')
  })
  
  router.post('/', (req, res) => {
    res.json('POST no /product')
  })
  
  router.put('/alterar', (req, res) => {
    res.json('PUT no /product')
  })
  
  router.patch('/alterarParte', (req, res) => {
    res.json('PATH no /product')
  })
  
  router.delete('/deletar', (req, res) => {
    res.json('DELETAR no /product')
  })

export default router;
