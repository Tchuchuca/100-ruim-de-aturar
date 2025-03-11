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
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
});

// 🔵 Listar usuários (READ)
app.get('/usuarios', async (_req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

// 🟡 Atualizar usuário (UPDATE)
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    await Usuario.update({ nome, email, senha }, { where: { id } });
    res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
});

// 🔴 Deletar usuário (DELETE)
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Usuario.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar usuário' });
  }
});

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
