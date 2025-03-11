// src/Pessoa.ts

export class Pessoa {
    nome: string;
    idade: number;
    sexo: string;
  
    constructor(nome: string, idade: number, sexo: string) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Sexo: ${this.sexo}`);
    }
  }
  
  export class AlunoClass extends Pessoa {
    cpf: string;
    login: string;
    senha: string;
    academia: string;
    altura: number;
    peso: number;
  
    constructor(
      nome: string,
      idade: number,
      sexo: string,
      cpf: string,
      login: string,
      senha: string,
      academia: string,
      altura: number,
      peso: number
    ) {
      super(nome, idade, sexo);
      this.cpf = cpf;
      this.login = login;
      this.senha = senha;
      this.academia = academia;
      this.altura = altura;
      this.peso = peso;
    }
  
    exibirInformacoesAluno(): void {
      this.exibirInformacoes();
      console.log(`CPF: ${this.cpf}`);
      console.log(`Login: ${this.login}`);
      console.log(`Senha: ${this.senha}`);
      console.log(`Academia: ${this.academia}`);
      console.log(`Altura: ${this.altura}m`);
      console.log(`Peso: ${this.peso}kg`);
    }
  }
  
  export function validarCPF(cpf: string): boolean {
    const cpfLimpo = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    return cpfLimpo.length === 11; // Validação básica
  }
  
  export function mostrarMensagem(mensagem: string, tipo: "sucesso" | "erro"): void {
    console.log(`${tipo.toUpperCase()}: ${mensagem}`);
  }
  
  export const academias: string[] = ["Active Life", "Iron Pressure", "Tchuca Gym"];
  