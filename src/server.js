import express from "express";
import userRouter from "./routers/userRouter.js"; //o userRouter é um apelido (alas)
import productRouter from "./routers/productRouter.js";
import { PORT, HOST, ENVIRONMENT } from "./config.js";
import logger from "./middlewares/logger.js";
import welcome from "./controllers/welcome.js";
import routeNotFounded from "./controllers/routeNotFounded.js";
import errorHandler from "./middlewares/errorHandler.js";

//middleware que converte o request body jsoon para o objeto
const app = express();
app.use(logger);
//app.use('/product',logger) //regra para dizer se queremos ou não que passe por essa rota
//express.json( )  vai converter um json do request e vai fazer o parse para um ojeto e joga dentro do req e vai fazer o next
app.use(express.json()); //Vai fazer o Parse antes de colocar no req

app.get('/',welcome)

app.use('/user', userRouter); //quando entrar na pasta usar, irei chamar o useRouter.
//app.use('/product',logger, productRouter); //podemos disparar uma sequencia de middleware

app.use('/product',logger, productRouter);
app.use('*', routeNotFounded);
app.user(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST: HOST+':'+PORT}`)
});