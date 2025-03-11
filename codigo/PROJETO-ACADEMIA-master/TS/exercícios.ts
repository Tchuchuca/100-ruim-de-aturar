// Classe Exercicio
export class Exercicio {
    nome: string;
    tipo: string; // Ex: "Cardio", "Musculação"
    duracao?: number; // em minutos, para exercícios de cardio
    repeticoes?: number; // número de repetições, para musculação
    series?: number; // número de séries, para musculação
    descricao?: string;
  
    // Construtor para inicializar os dados do exercício
    constructor(nome: string, tipo: string, duracao?: number, repeticoes?: number, series?: number, descricao?: string) {
      this.nome = nome;
      this.tipo = tipo;
      if (tipo === "Cardio" && duracao) {
        this.duracao = duracao;
      }
      if (tipo === "Musculação" && repeticoes && series) {
        this.repeticoes = repeticoes;
        this.series = series;
      }
      this.descricao = descricao;
    }
  
    // Método para exibir as informações do exercício
    exibirInformacoes(): void {
      console.log(`Exercício: ${this.nome}`);
      console.log(`Tipo: ${this.tipo}`);
      if (this.tipo === "Cardio" && this.duracao) {
        console.log(`Duração: ${this.duracao} minutos`);
      }
      if (this.tipo === "Musculação" && this.repeticoes && this.series) {
        console.log(`Repetições: ${this.repeticoes} por série`);
        console.log(`Séries: ${this.series}`);
      }
      if (this.descricao) {
        console.log(`Descrição: ${this.descricao}`);
      }
    }
  }
  // Criando instâncias de exercícios
  const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
  const supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");

// Criando instâncias de exercícios com tratamento de erros
try {
  const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
  corrida.exibirInformacoes();

  const supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");
  supino.exibirInformacoes();
} catch (error) {
  console.error("Erro ao criar o exercício:", error);
}
