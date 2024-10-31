import express from "express";
import userList from "../controllers/user/userList.js";
import createUser from "../controllers/user/createUser.js";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";


const router = express.Router(); //criando o roteador



router.get('/', (req, res) => {
    res.json('Rota GET no /user')
  })
  
  router.post('/login', login)
  router.post('/logout', logout)


export default router;
