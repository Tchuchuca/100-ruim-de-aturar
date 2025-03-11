export class AlunoController {
    static getUsers(req, res, next) {
        try {
            return res.json({ message: "Listando Alunos!" });
        }
        catch (error) {
            console.log({ "erro ao listar alunos": error });
            return next(error);
        }
    }
    static createUser(req, res, next) {
        try {
            const { id, name, nascimento, sexo, peso, altura, usuario, senha } = req.body;
            return res.status(201).json({ message: `Aluno ${name} cadastrado com sucesso!` });
        }
        catch (error) {
            console.log({ "erro ao cadastrar aluno": error });
            return next(error);
        }
    }
}
