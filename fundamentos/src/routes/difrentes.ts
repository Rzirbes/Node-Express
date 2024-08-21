import { Router } from "express"
import path from "path";

const router = Router()

router.get("/variavel", (req, res) => {
    let v = "<h1>Adeus</h1>";
    res.send(v);
})

router.get("/variavelNumerica", (req, res) => {
    let v = 1758;
    res.json(v);
})

router.get("/objeto", (req, res) => {
    let v = {
        nome: "maria",
        idade: 29
    };
    res.json(v);// objeto com json
})

router.get("/arrayObjetos", (req, res) => {
    let v = [
        {
            nome: "maria",
            idade: 29
        },
        {
            nome: "maria",
            idade: 29
        },
        {
            nome: "maria",
            idade: 29
        },
    ];
    res.json(v);// objeto com json
})

router.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "assets", "pagina.html"));
})

router.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "assets", "Atestado.pdf"))
})

export default router