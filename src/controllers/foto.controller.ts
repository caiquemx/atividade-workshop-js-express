import { Request, Response } from "express";
import Foto from "../models/foto.model";
import { validationResult } from "express-validator";

export default class FotoController {
  static async index(req: Request, res: Response) {
    const fotos = await Foto.findMany();
    res.json(fotos);
  }

  static async create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const foto = await Foto.create({
      data: req.body,
    });
    res.json(foto);
  }

  static async show(req: Request, res: Response) {
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!foto) {
      return res.status(404).json({ message: "Foto não encontrada" });
    }
    res.json(foto);
  }

  static async update(req: Request, res: Response) {
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!foto) {
      return res.status(404).json({ message: "Foto não encontrada" });
    }
    const foto_atualizada = await Foto.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    res.json(foto_atualizada);
  }

  static async delete(req: Request, res: Response) {
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!foto) {
      return res.status(404).json({ message: "Foto não encontrada" });
    }
    await Foto.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(204).json({ message: "Foto deletada com sucesso" });
  }
}
