import { Router } from "express";

const router = Router();

router.get("/frutas/:id", (req, res) => {
    const frutas = ["maça", "uva", "limão"]
    const id = +req.params.id;
    if (id >= 0 && id < frutas.length) {
        res.status(200).send(frutas[id])
    }
})

router.get("/pessoa/:nome/:cor", (req, res) => {
    const pessoa = { nome: req.params.nome, cor: req.params.cor }
    res.status(201).send(`${pessoa.nome} - cor favorita: ${pessoa.cor}`)

})

export default router