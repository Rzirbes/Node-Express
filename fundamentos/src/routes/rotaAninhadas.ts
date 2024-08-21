import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("aqui existem produtos");

})

router.get("/cozinha", (req, res) => {
    const prods = ["Colher", "Garfo", "faca"]
    res.send(prods)
})

router.get("/banheiro", (req, res) => {
    const prods = ["escova", "pasta", "dentes"]
    res.send(prods)
})

export default router;