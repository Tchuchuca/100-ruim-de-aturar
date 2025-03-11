import { Pessoa } from "./cadastroAluno";
import { AlunoClass, validarCPF } from "./cadastroAluno";

// Mock global do document sem usar jsdom
global.document = {
  getElementById: jest.fn().mockReturnValue({
    addEventListener: jest.fn(),
  }),
} as any;

describe("Pessoa", () => {
  it("deve criar uma instância de Pessoa corretamente", () => {
    const pessoa = new Pessoa("João", 25, "Masculino");

    expect(pessoa).toBeInstanceOf(Pessoa);
    expect(pessoa.nome).toBe("João");
    expect(pessoa.idade).toBe(25);
    expect(pessoa.sexo).toBe("Masculino");
  });

  it("deve exibir informações corretamente", () => {
    const pessoa = new Pessoa("João", 25, "Masculino");

    console.log = jest.fn(); // Mock da função console.log

    pessoa.exibirInformacoes();

    expect(console.log).toHaveBeenCalledWith("Nome: João");
    expect(console.log).toHaveBeenCalledWith("Idade: 25");
    expect(console.log).toHaveBeenCalledWith("Sexo: Masculino");
  });
});

describe("AlunoClass", () => {
  it("deve criar uma instância de AlunoClass corretamente", () => {
    const aluno = new AlunoClass(
      "Maria",
      22,
      "Feminino",
      "12345678901",
      "maria123",
      "senha123",
      "Active Life",
      1.65,
      60
    );

    expect(aluno).toBeInstanceOf(AlunoClass);
    expect(aluno.nome).toBe("Maria");
    expect(aluno.idade).toBe(22);
    expect(aluno.sexo).toBe("Feminino");
    expect(aluno.cpf).toBe("12345678901");
    expect(aluno.login).toBe("maria123");
    expect(aluno.senha).toBe("senha123");
    expect(aluno.academia).toBe("Active Life");
    expect(aluno.altura).toBe(1.65);
    expect(aluno.peso).toBe(60);
  });

  it("deve exibir as informações do aluno corretamente", () => {
    const aluno = new AlunoClass(
      "Maria",
      22,
      "Feminino",
      "12345678901",
      "maria123",
      "senha123",
      "Active Life",
      1.65,
      60
    );

    console.log = jest.fn(); // Mock da função console.log

    aluno.exibirInformacoesAluno();

    expect(console.log).toHaveBeenCalledWith("Nome: Maria");
    expect(console.log).toHaveBeenCalledWith("Idade: 22");
    expect(console.log).toHaveBeenCalledWith("Sexo: Feminino");
    expect(console.log).toHaveBeenCalledWith("CPF: 12345678901");
    expect(console.log).toHaveBeenCalledWith("Login: maria123");
    expect(console.log).toHaveBeenCalledWith("Senha: senha123");
    expect(console.log).toHaveBeenCalledWith("Academia: Active Life");
    expect(console.log).toHaveBeenCalledWith("Altura: 1.65m");
    expect(console.log).toHaveBeenCalledWith("Peso: 60kg");
  });

  it("deve mockar o método `getElementById` sem usar jsdom", () => {
    // Mock do método `getElementById` sem jsdom
    const mockGetElementById = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
    });

    document.getElementById = mockGetElementById; // Sobrescreve global.document.getElementById

    // A função que usa o `getElementById`
    const form = document.getElementById("cadastroAlunosform");
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    // Verifica se o `getElementById` foi chamado corretamente
    expect(mockGetElementById).toHaveBeenCalledWith("cadastroAlunosform");
    expect(form?.addEventListener).toHaveBeenCalledWith("submit", expect.any(Function));

    // Limpar mocks depois do teste (opcional)
    document.getElementById = jest.fn();
  });
});

describe("validarCPF", () => {
  it("deve retornar true para um CPF válido", () => {
    const cpfValido = "12345678901";
    expect(validarCPF(cpfValido)).toBe(true);
  });

  it("deve retornar false para um CPF inválido", () => {
    const cpfInvalido = "123";
    expect(validarCPF(cpfInvalido)).toBe(false);
  });
});
