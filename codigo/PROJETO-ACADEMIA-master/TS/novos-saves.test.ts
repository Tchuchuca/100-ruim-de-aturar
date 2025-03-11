import { salvarAluno, salvarInstrutor, salvarPlanoTreino, salvarExercicio } from './novos-saves';

describe('Testando funções de salvar', () => {
  let localStorageMock: any;

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

    // Mock do alert
    global.alert = jest.fn();

    // Mock apenas o método close do window
    Object.defineProperty(global, 'window', {
      value: { close: jest.fn() },
      writable: true, // Permite a modificação da propriedade
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('salvarAluno deve salvar os dados corretamente', () => {
    // Chama a função para salvar os dados
    salvarAluno();

    // Obtém os dados salvos do localStorage
    const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);

    // Verifica se o localStorage foi chamado para salvar o aluno
    expect(savedData).toEqual([
      {
        nome: "mocked value for nome",
        idade: 30,  // Alterado para corresponder ao valor mockado
        altura: 1.75,  // Alterado para corresponder ao valor mockado
        peso: 70,  // Alterado para corresponder ao valor mockado
        imc: "22.86",  // Calculando o IMC de 70 / (1.75 * 1.75)
        objetivo: "mocked value for objetivo"
      }
    ]);
    expect(global.alert).toHaveBeenCalledWith("Aluno cadastrado com sucesso!");
    expect(global.window.close).toHaveBeenCalled();  // Verifica se window.close foi chamado
  });

  test('salvarInstrutor deve salvar os dados corretamente', () => {
    // Chama a função para salvar os dados
    salvarInstrutor();

    // Obtém os dados salvos do localStorage
    const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);

    // Verifica se o localStorage foi chamado para salvar o instrutor
    expect(savedData).toEqual([
      {
        nome: "mocked value for nome",
        idade: 30,  // Alterado para corresponder ao valor mockado
        formacao: "mocked value for formacao",
        email: "mocked value for email",
        contato: "mocked value for contato"
      }
    ]);
    expect(global.alert).toHaveBeenCalledWith("Instrutor cadastrado com sucesso!");
    expect(global.window.close).toHaveBeenCalled();  // Verifica se window.close foi chamado
  });

  test('salvarPlanoTreino deve salvar os dados corretamente', () => {
    // Chama a função para salvar os dados
    salvarPlanoTreino();

    // Obtém os dados salvos do localStorage
    const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);

    // Verifica se o localStorage foi chamado para salvar o plano de treino
    expect(savedData).toEqual([
      {
        nome: "mocked value for nome",
        descricao: "mocked value for descricao",
        duracao: 60  // Agora `duracao` é um número e não null
      }
    ]);
    expect(global.alert).toHaveBeenCalledWith("Plano de treino cadastrado com sucesso!");
    expect(global.window.close).toHaveBeenCalled();  // Verifica se window.close foi chamado
  });

  test('salvarExercicio deve salvar os dados corretamente', () => {
    // Chama a função para salvar os dados
    salvarExercicio();

    // Obtém os dados salvos do localStorage
    const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);

    // Verifica se o localStorage foi chamado para salvar o exercício
    expect(savedData).toEqual([
      {
        nome: "mocked value for nome",
        grupoMuscular: "mocked value for grupoMuscular",
        repeticoes: 10,  // Alterado para corresponder ao valor mockado
        serie: 3,  // Alterado para corresponder ao valor mockado
        carga: 50   // Alterado para corresponder ao valor mockado
      }
    ]);
    expect(global.alert).toHaveBeenCalledWith("Exercício cadastrado com sucesso!");
    expect(global.window.close).toHaveBeenCalled();  // Verifica se window.close foi chamado
  });
});
