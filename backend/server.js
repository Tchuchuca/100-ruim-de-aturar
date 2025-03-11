var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import dotenv from 'dotenv';
import { conectarBD } from './config/database';
import Usuario from './models/alunoModel';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
conectarBD();
// 🟢 Criar usuário (CREATE)
app.post('/usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    try {
        const usuario = yield Usuario.create({ nome, email, senha });
        res.status(201).json(usuario);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
}));
// 🔵 Listar usuários (READ)
app.get('/usuarios', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield Usuario.findAll();
    res.json(usuarios);
}));
// 🟡 Atualizar usuário (UPDATE)
app.put('/usuarios/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        yield Usuario.update({ nome, email, senha }, { where: { id } });
        res.json({ message: 'Usuário atualizado com sucesso!' });
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
}));
// 🔴 Deletar usuário (DELETE)
app.delete('/usuarios/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Usuario.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
}));
// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
