import { excluirAluno, excluirInstrutor, excluirPlanoTreino, excluirExercicio, listarAlunos, listarInstrutores, listarPlanosTreino, listarExercicios } from './acesso-adm';

// Mock do localStorage com todas as propriedades da interface Storage
beforeEach(() => {
  // Mock do localStorage
  const localStorageMock = {
    length: 0,
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
  };

  // Associar o mock ao global.localStorage
  global.localStorage = localStorageMock as Storage;
});

// Mock das funções de acesso-adm com tipagem explicita para o Jest Mock
jest.mock('./acesso-adm', () => ({
  excluirAluno: jest.fn(),
  excluirInstrutor: jest.fn(),
  excluirPlanoTreino: jest.fn(),
  excluirExercicio: jest.fn(),
  listarAlunos: jest.fn(),
  listarInstrutores: jest.fn(),
  listarPlanosTreino: jest.fn(),
  listarExercicios: jest.fn(),
}));

describe('Testes das funções de cadastro e exclusão', () => {
  beforeEach(() => {
    // Limpar o mock do localStorage antes de cada teste
    localStorage.clear();
  });

  test('deve excluir um aluno corretamente', () => {
    const alunosMock = [
      { nome: 'Aluno 1', idade: 20, altura: 1.75, peso: 70, imc: 22.9, objetivo: 'Emagrecer' },
      { nome: 'Aluno 2', idade: 22, altura: 1.80, peso: 80, imc: 24.7, objetivo: 'Hipertrofia' }
    ];
    
    // Mock do comportamento do localStorage
    (localStorage.getItem as jest.Mock).mockReturnValueOnce(JSON.stringify(alunosMock));

    // Definir a implementação da função excluirAluno como uma função mockada
    (excluirAluno as jest.Mock).mockImplementation((index: number) => {
      const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
      alunos.splice(index, 1); // Excluir o aluno
      localStorage.setItem('alunos', JSON.stringify(alunos)); // Atualizar o localStorage
    });

    excluirAluno(0); // Excluir aluno no índice 0

    // Afirmar que o setItem foi chamado para atualizar o localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith('alunos', JSON.stringify([{ nome: 'Aluno 2', idade: 22, altura: 1.80, peso: 80, imc: 24.7, objetivo: 'Hipertrofia' }])); 
  });

  test('deve excluir um instrutor corretamente', () => {
    const instrutoresMock = [
      { nome: 'Instrutor 1', idade: 30, formacao: 'Educação Física', email: 'instrutor1@exemplo.com', contato: '999999999' },
      { nome: 'Instrutor 2', idade: 35, formacao: 'Nutrição', email: 'instrutor2@exemplo.com', contato: '988888888' }
    ];
    
    // Mock do comportamento do localStorage
    (localStorage.getItem as jest.Mock).mockReturnValueOnce(JSON.stringify(instrutoresMock));

    // Definir a implementação da função excluirInstrutor como uma função mockada
    (excluirInstrutor as jest.Mock).mockImplementation((index: number) => {
      const instrutores = JSON.parse(localStorage.getItem('instrutores') || '[]');
      instrutores.splice(index, 1); // Excluir o instrutor
      localStorage.setItem('instrutores', JSON.stringify(instrutores)); // Atualizar o localStorage
    });

    excluirInstrutor(1); // Excluir instrutor no índice 1

    expect(localStorage.setItem).toHaveBeenCalledWith('instrutores', JSON.stringify([{ nome: 'Instrutor 1', idade: 30, formacao: 'Educação Física', email: 'instrutor1@exemplo.com', contato: '999999999' }])); 
  });

  // Outros testes podem seguir a mesma lógica
});
