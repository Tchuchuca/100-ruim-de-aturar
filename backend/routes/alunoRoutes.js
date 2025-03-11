var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import Aluno from "../models/alunoModel";
const router = Router();
router.get("/alunos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alunos = yield Aluno.findAll(); // ou Aluno.find() dependendo da biblioteca ORM que você está usando
        res.json(alunos);
    }
    catch (error) {
        console.error("Erro ao buscar alunos:", error); // Adicionando mais informações ao log
        res.status(500).json({ error: "Erro ao buscar alunos" });
    }
}));
// Rota para adicionar um aluno
router.post("/alunos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, nascimento, sexo, peso, altura, usuario, senha } = req.body;
        const novoAluno = yield Aluno.create({ id, name, nascimento, sexo, peso, altura, usuario, senha });
        res.status(201).json(novoAluno);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar aluno" });
    }
}));
export default router;
