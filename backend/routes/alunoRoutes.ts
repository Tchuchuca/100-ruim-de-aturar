import { Router } from "express";
import Aluno from "../models/alunoModel";

const router = Router();

router.get("/alunos", async (req, res) => {
    try {
      const alunos = await Aluno.findAll(); // ou Aluno.find() dependendo da biblioteca ORM que você está usando
      res.json(alunos);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error); // Adicionando mais informações ao log
      res.status(500).json({ error: "Erro ao buscar alunos" });
    }
  });
  
  

// Rota para adicionar um aluno
router.post("/alunos", async (req, res) => {
  try {
    const { id, name, nascimento,  sexo, peso, altura, usuario, senha } = req.body;
    const novoAluno = await Aluno.create({ id, name, nascimento,  sexo, peso, altura, usuario, senha });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar aluno" });
  }
});

export default router;
