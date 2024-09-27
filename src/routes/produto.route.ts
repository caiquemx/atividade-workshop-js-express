import { Router } from "express";
import ProdutoController from "../controllers/produto.controller";
import {
  produtoUpdateValidator,
  produtoValidator,
  produtoIdValidator,
} from "../validators/produto.validator";

const router = Router();

router.get("/", ProdutoController.index);
router.post("/", produtoValidator, ProdutoController.create);
router.get("/:id", produtoIdValidator, ProdutoController.show);
router.post("/:id", produtoUpdateValidator, ProdutoController.update);
router.delete("/:id", produtoIdValidator, ProdutoController.delete);

export default router;
