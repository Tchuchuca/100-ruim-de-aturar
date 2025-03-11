import {Pessoa} from './pessoa'
export class Aluno extends Pessoa {
  CPF: string;
  altura: string;
  peso: string;
  usuario: string;
  senha: string;

  // Construtor para inicializar os dados do aluno (incluindo os dados da pessoa)
  constructor(nome: string, idade: number, sexo: string, CPF: string, Altura: string, Peso: string, Usuario: string, Senha: string) {
      // Chama o construtor da classe base (Pessoa)
      super(nome, idade, sexo);
      
      // Validação dos dados do aluno
      if (!this.validarCPF(CPF)) {
          throw new Error("CPF inválido.");
      }
      if (isNaN(Number(Altura)) || Number(Altura) <= 0) {
          throw new Error("Altura deve ser um número positivo.");
      }
      if (isNaN(Number(Peso)) || Number(Peso) <= 0) {
          throw new Error("Peso deve ser um número positivo.");
      }

      this.CPF = CPF;
      this.altura = Altura;
      this.peso = Peso;
      this.usuario = Usuario;
      this.senha = Senha; 
  }

  // Método para validar CPF (exemplo simples)
  private validarCPF(CPF: string): boolean {
      return /^\d{11}$/.test(CPF); // Verifica se o CPF tem 11 dígitos
  }

  // Método para exibir todas as informações (da Pessoa e do Aluno)
  exibirInformacoesAluno(): void {
      try {
          this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
          console.log(`CPF: ${this.CPF}`);
          console.log(`Altura: ${this.altura}`);
          console.log(`Peso: ${this.peso}`);
          console.log(`Usuário: ${this.usuario}`);
          console.log(`Senha: ${this.senha}`);
      } catch (error) {
          console.error("Erro ao exibir informações do aluno:", error);
      }
  }
}

// Criando uma instância da classe Aluno
try {
  const aluno1 = new Aluno("Jorjão", 48, "Masculino", "12387634522", "178", "78", "JJ", "JJgordo");
  // Chamando o método para exibir as informações do aluno
  aluno1.exibirInformacoesAluno();
} catch (error) {
  console.error("Erro ao criar o aluno:", error);
}
