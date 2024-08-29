import express from "express";
import userRouter from "./routers/userRouter.js"; //o userRouter é um apelido (alas)
import productRouter from "./routers/productRouter.js";
import { PORT, HOST, ENVIRONMENT } from "./config.js";


const app = express();

app.use(express.json()); //Vai fazer o Parse antes de colocar no req

app.get('/', (req,res)=> {res.json({message: "Bem vindo a API"})})

app.use('/user', userRouter); //quando entrar na pasta usar, irei chamar o useRouter.
app.use('/product', productRouter); 

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST: HOST+':'+PORT}`)
});