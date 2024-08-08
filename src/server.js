import express from "express";
import userRouter from "./routers/userRouter.js"; //o userRouter é um apelido (alas)
import productRouter from "./routers/productRouter.js";

const app = express();
const port = 3000;

app.use('/user', userRouter); //quando entrar na pasta usar, irei chamar o useRouter.
app.use('/product', productRouter); 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
});