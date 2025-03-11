export class Pessoa {
  nome: string;
  idade: number;
  sexo: string;

  // Construtor para inicializar os dados da pessoa
  constructor(nome: string, idade: number, sexo: string) {
      // Validação de dados antes de atribuir os valores
      this.validarDados(nome, idade, sexo);

      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
  }

  // Método para validar os dados da pessoa
  private validarDados(nome: string, idade: number, sexo: string): void {
      if (!nome || nome.trim() === '') {
          throw new Error("Nome não pode ser vazio.");
      }
      if (idade < 0) {
          throw new Error("Idade deve ser um número não negativo.");
      }
      if (sexo !== "Masculino" && sexo !== "Feminino") {
          throw new Error("Sexo deve ser 'Masculino' ou 'Feminino'.");
      }
  }

  // Método para exibir as informações da pessoa
  exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Sexo: ${this.sexo}`);
  }
}

// Criando uma instância da classe Pessoa com tratamento de erros
try {
  const pessoa1 = new Pessoa("João", 30, "Masculino");

  // Chamando o método para exibir as informações
  pessoa1.exibirInformacoes();
} catch (error) {
  console.error("Erro ao criar a pessoa:", error);
}
