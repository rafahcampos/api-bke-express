import express from "express";
import userList from "../controllers/user/userList.js";
import userById from "../controllers/user/userById.js";
import createUser from "../controllers/user/createUser.js";
import editUser from "../controllers/user/editUser.js";
import editNameUser from "../controllers/user/editNameUser.js";
import deleteUser from "../controllers/user/deleteUser.js";

const router = express.Router(); //criando o roteador

router.get('/', (req, res) => {
    res.json('Rota GET no /user')
  })
  
  router.get('/:id', userById);
  router.get('/list', userList)
  router.post('/', createUser)
  router.put('/:id', editUser);
  router.patch('/:id', editNameUser);
  router.delete('/:id', deleteUser);

export default router;
