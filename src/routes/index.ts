import { Router } from "express";
import produtoRouter from "./produto.route";
import fotoRouter from "./foto.route";

const router = Router();

router.use("/produtos", produtoRouter);
router.use("/fotos", fotoRouter);

export default router;
