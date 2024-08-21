import express from "express"
import rotasBasicos from "./routes/basicos"
import rotasDiferentes from "./routes/difrentes"
import rotasAninhadas from "./routes/rotaAninhadas"
import rotasStatus from "./routes/status"
import rotasComParametros from "./routes/parametroRotas"
import rotasComQuery from "./routes/parametrosQuery"
import rotasMetodos from "./routes/metodos"

const app = express();

const porta = 8080;

//middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next();
// })

//middlewares para leitura do body da requisição
app.use(express.urlencoded({extended:true}))
app.use(express.json());



app.use(rotasBasicos)
app.use(rotasDiferentes)
app.use("/produtos", rotasAninhadas)
app.use("/status", rotasStatus)
app.use("/parametrosDeRotas", rotasComParametros)
app.use("/parametrosDeQuery", rotasComQuery)
app.use("/metodos", rotasMetodos)

app.listen(porta, () => {
    console.log("Servidor Rodando");
})

