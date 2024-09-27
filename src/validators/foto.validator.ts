import { body, param } from "express-validator";

export const fotoValidator = [
  body("titulo").isString().withMessage("Título é obrigatório"),
  body("url").isString().withMessage("URL é obrigatória"),
  body("produtoId").isNumeric().withMessage("Produto ID é obrigatório"),
];

export const fotoUpdateValidator = [
  param("id").isInt().withMessage("ID é obrigatório"),
  body("titulo").isString().withMessage("Título é obrigatório"),
  body("url").isString().withMessage("URL é obrigatória"),
  body("produtoId").isNumeric().withMessage("Produto ID é obrigatório"),
];

export const fotoIdValidator = [
  param("id").isInt().withMessage("ID é obrigatório"),
];
