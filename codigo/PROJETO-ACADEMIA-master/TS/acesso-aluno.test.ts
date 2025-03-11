import { carregarAluno } from './acesso-aluno'; // Importa a função para testar

describe('Teste da lógica de carregamento de aluno', () => {
  let localStorageMock: any;
  let nomeAlunoElementMock: { textContent: string };

  beforeEach(() => {
    // Mock do localStorage
    localStorageMock = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => { store[key] = value; }),
        clear: jest.fn(() => { store = {}; }),
      };
    })();
    global.localStorage = localStorageMock;

    // Mock do document.getElementById
    nomeAlunoElementMock = { textContent: '' };
    global.document = {
      getElementById: jest.fn().mockReturnValue(nomeAlunoElementMock),
      // Adicionamos uma implementação mínima para o 'document', apenas o que é necessário
    } as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('deve exibir o nome do aluno corretamente quando os dados estão presentes', () => {
    // Mock do localStorage com dados de aluno
    const aluno = { nome: 'João Silva' };
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(aluno));

    // Chama a função para carregar os dados
    const resultado = carregarAluno();

    // Verifica se o texto foi atualizado com o nome do aluno
    expect(resultado).toBe('João Silva');
  });

  test('deve exibir "Aluno não encontrado" quando não houver dados no localStorage', () => {
    // Simula a ausência de dados no localStorage
    localStorageMock.getItem.mockReturnValueOnce(null);

    // Chama a função para carregar os dados
    const resultado = carregarAluno();

    // Verifica se o texto foi atualizado para "Aluno não encontrado"
    expect(resultado).toBe('Aluno não encontrado');
  });

  test('deve exibir "Aluno não encontrado" quando os dados do aluno não contiverem nome', () => {
    // Simula um aluno sem o campo nome
    const aluno = {};
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(aluno));

    // Chama a função para carregar os dados
    const resultado = carregarAluno();

    // Verifica se o texto foi atualizado para "Aluno não encontrado"
    expect(resultado).toBe('Aluno não encontrado');
  });
});
