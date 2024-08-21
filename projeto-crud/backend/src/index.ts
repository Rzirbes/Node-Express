import express from "express";
import cors from "cors"
import rotasProdutos from "./routes/produtos"
import rotasLogin from "./routes/login"
import dotenv from "dotenv"

dotenv.config()


const app = express();
const porta = 4000;

function verificaToken(){
    
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/login", rotasLogin)
app.use("/produtos", rotasProdutos)


app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
