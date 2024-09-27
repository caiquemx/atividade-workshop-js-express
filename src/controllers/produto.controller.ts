import { Request, Response } from "express";
import Produto from "../models/produto.model";
import { validationResult } from "express-validator";

export default class ProdutoController {
  static async index(req: Request, res: Response) {
    const produtos = await Produto.findMany();
    res.json(produtos);
  }

  static async create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const produto = await Produto.create({
      data: req.body,
    });
    res.json(produto);
  }

  static async show(req: Request, res: Response) {
    const produto = await Produto.findUnique({
      include: {
        fotos: true,
      },
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.json(produto);
  }

  static async update(req: Request, res: Response) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    const produto_atualizado = await Produto.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    res.json(produto_atualizado);
  }

  static async delete(req: Request, res: Response) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    await Produto.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(204).json({ message: "Produto deletado com sucesso" });
  }
}
