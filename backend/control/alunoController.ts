import { Request, Response, NextFunction } from "express";

export class AlunoController {
  static getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({ message: "Listando Alunos!" });
    } catch (error) {
      console.log({ "erro ao listar alunos": error });
      return next(error);
    }
  }

  static createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, nascimento, sexo, peso, altura, usuario, senha } = req.body;
      return res.status(201).json({ message: `Aluno ${name} cadastrado com sucesso!` });
    } catch (error) {
      console.log({ "erro ao cadastrar aluno": error });
      return next(error);
    }
  }
}

