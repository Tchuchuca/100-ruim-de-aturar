import Aluno from './aluno'; // Importa a classe Aluno
import Instrutor from './instrutor'; // Importa a classe Instrutor
import Exercicio from './exercícios'; // Importa a classe Exercicio

class Academia {
    private alunos: Aluno[]; // Array para armazenar os alunos
    private instrutores: Instrutor[]; // Array para armazenar os instrutores
    private exercicios: Exercicio[]; // Array para armazenar os exercícios

    constructor() {
        this.alunos = []; // Inicializa a lista de alunos
        this.instrutores = []; // Inicializa a lista de instrutores
        this.exercicios = []; // Inicializa a lista de exercícios
    }

    // Método para adicionar um aluno
    adicionarAluno(aluno: Aluno): void {
        try {
            if (!(aluno instanceof Aluno)) {
                throw new Error('O objeto passado não é um aluno válido.');
            }
            this.alunos.push(aluno);
            console.log(`Aluno ${aluno.nome} adicionado com sucesso!`);
        } catch (error) {
            console.error(`Erro ao adicionar aluno: ${error.message}`);
        }
    }

    // Método para adicionar um instrutor
    adicionarInstrutor(instrutor: Instrutor): void {
        try {
            if (!(instrutor instanceof Instrutor)) {
                throw new Error('O objeto passado não é um instrutor válido.');
            }
            this.instrutores.push(instrutor);
            console.log(`Instrutor ${instrutor.nome} adicionado com sucesso!`);
        } catch (error) {
            console.error(`Erro ao adicionar instrutor: ${error.message}`);
        }
    }

    // Método para adicionar um exercício
    adicionarExercicio(exercicio: Exercicio): void {
        try {
            if (!(exercicio instanceof Exercicio)) {
                throw new Error('O objeto passado não é um exercício válido.');
            }
            this.exercicios.push(exercicio);
            console.log(`Exercício ${exercicio.nome} adicionado com sucesso!`);
        } catch (error) {
            console.error(`Erro ao adicionar exercício: ${error.message}`);
        }
    }

    // Método para exibir todos os alunos
    exibirAlunos(): void {
        console.log("Lista de Alunos:");
        if (this.alunos.length === 0) {
            console.log('Nenhum aluno cadastrado.');
            return;
        }
        this.alunos.forEach(aluno => aluno.exibirInformacoesAluno());
    }

    // Método para exibir todos os instrutores
    exibirInstrutores(): void {
        console.log("Lista de Instrutores:");
        if (this.instrutores.length === 0) {
            console.log('Nenhum instrutor cadastrado.');
            return;
        }
        this.instrutores.forEach(instrutor => instrutor.exibirInformacoesInstrutor());
    }

    // Método para exibir todos os exercícios
    exibirExercicios(): void {
        console.log("Lista de Exercícios:");
        if (this.exercicios.length === 0) {
            console.log('Nenhum exercício cadastrado.');
            return;
        }
        this.exercicios.forEach(exercicio => exercicio.exibirInformacoes());
    }
}

// Exemplo de uso da classe Academia com tratamento de erros
const academia = new Academia();

try {
    // Criando instâncias de Aluno, Instrutor e Exercício
    const aluno1 = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
    academia.adicionarAluno(aluno1);

    const instrutor1 = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
    academia.adicionarInstrutor(instrutor1);

    const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
    academia.adicionarExercicio(corrida);

    const supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
    academia.adicionarExercicio(supino);

    // Exibindo as listas de alunos, instrutores e exercícios
    academia.exibirAlunos();
    academia.exibirInstrutores();
    academia.exibirExercicios();
} catch (error) {
    console.error(`Erro: ${error.message}`);
}
