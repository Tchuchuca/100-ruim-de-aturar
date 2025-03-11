import { Pessoa } from './pessoa'; 

describe('Classe Pessoa', () => {
  let pessoa1: Pessoa;

  beforeEach(() => {
    // Inicializando a instância antes de cada teste
    pessoa1 = new Pessoa('João', 30, 'Masculino');
  });

  test('deve criar uma instância da classe Pessoa corretamente', () => {
    expect(pessoa1).toBeInstanceOf(Pessoa);
    expect(pessoa1.nome).toBe('João');
    expect(pessoa1.idade).toBe(30);
    expect(pessoa1.sexo).toBe('Masculino');
  });

  test('deve exibir as informações corretamente', () => {
    console.log = jest.fn(); // Espiando o console.log

    pessoa1.exibirInformacoes();

    expect(console.log).toHaveBeenCalledWith('Nome: João');
    expect(console.log).toHaveBeenCalledWith('Idade: 30');
    expect(console.log).toHaveBeenCalledWith('Sexo: Masculino');
  });

  test('deve exibir as informações com dados diferentes', () => {
    pessoa1 = new Pessoa('Maria', 25, 'Feminino');
    console.log = jest.fn();

    pessoa1.exibirInformacoes();

    expect(console.log).toHaveBeenCalledWith('Nome: Maria');
    expect(console.log).toHaveBeenCalledWith('Idade: 25');
    expect(console.log).toHaveBeenCalledWith('Sexo: Feminino');
  });
});
