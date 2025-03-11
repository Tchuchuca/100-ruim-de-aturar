import { Aluno } from './aluno';
//import { Pessoa } from '../codigo/PROJETO-ACADEMIA-master/TS/pessoa';


describe('Aluno', () => {
    let aluno: Aluno;

    beforeEach(() => {
        // Inicializa uma nova instância da classe Aluno antes de cada teste
        aluno = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
    });

    test('deve criar um aluno com os dados corretos', () => {
        expect(aluno.nome).toBe("Jorjão");
        expect(aluno.idade).toBe(48);
        expect(aluno.sexo).toBe("Masculino");
        expect(aluno.CPF).toBe("12387634522");
        expect(aluno.altura).toBe("178");
        expect(aluno.peso).toBe("78");
        expect(aluno.usuario).toBe("JJ");
        expect(aluno.senha).toBe("JJgordo");
    });

    test('deve exibir as informações do aluno corretamente', () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Espiona o console.log
        aluno.exibirInformacoesAluno(); // Chama o método para exibir as informações do aluno
        expect(consoleSpy).toHaveBeenCalledWith("Nome: Jorjão");
        expect(consoleSpy).toHaveBeenCalledWith("Idade: 48");
        expect(consoleSpy).toHaveBeenCalledWith("Sexo: Masculino");
        expect(consoleSpy).toHaveBeenCalledWith("CPF: 12387634522");
        expect(consoleSpy).toHaveBeenCalledWith("Altura: 178");
        expect(consoleSpy).toHaveBeenCalledWith("Peso: 78");
        expect(consoleSpy).toHaveBeenCalledWith("Usuário: JJ");
        expect(consoleSpy).toHaveBeenCalledWith("Senha: JJgordo");
        consoleSpy.mockRestore(); // Restaura o comportamento original de console.log
    });
});
