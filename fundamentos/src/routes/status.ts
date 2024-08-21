import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/ok", (req, res) => {
    res.sendStatus(200);

})

router.get("/segredo", (req, res) => {
    res.sendStatus(401);

})

router.get("/naoEncontrado", (req, res) => {
    res.status(404).send("Pagina não encontrada otário");

})

router.get("/imagem", (req, res) => {
    if (fs.existsSync("../assets/foto")) {
        res.sendStatus(200);
    }
    res.sendStatus(204);

})

export default router;