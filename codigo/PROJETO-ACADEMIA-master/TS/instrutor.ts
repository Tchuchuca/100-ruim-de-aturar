class Instrutor extends Pessoa {
  formacao: string;

  // Construtor para inicializar os dados do instrutor (incluindo os dados da pessoa)
  constructor(nome: string, idade: number, sexo: string, formacao: string) {
      // Validação de dados antes de chamar o construtor da classe base
      this.validarDados(nome, idade, sexo, formacao);

      // Chama o construtor da classe base (Pessoa)
      super(nome, idade, sexo);
      
      // Inicializa a propriedade específica de Instrutor
      this.formacao = formacao;
  }

  // Método para validar os dados do instrutor
  private validarDados(nome: string, idade: number, sexo: string, formacao: string): void {
      if (!nome || nome.trim() === '') {
          throw new Error("Nome do instrutor não pode ser vazio.");
      }
      if (idade <= 0) {
          throw new Error("Idade deve ser um número positivo.");
      }
      if (sexo !== "Masculino" && sexo !== "Feminino") {
          throw new Error("Sexo deve ser 'Masculino' ou 'Feminino'.");
      }
      if (!formacao || formacao.trim() === '') {
          throw new Error("Formação do instrutor não pode ser vazia.");
      }
  }

  // Método para exibir todas as informações (da Pessoa e do Instrutor)
  exibirInformacoesInstrutor(): void {
      this.exibirInformacoesInstrutor(); // Chama o método da classe base (Pessoa)
      console.log(`Formação: ${this.formacao}`);
  }
}

// Criando uma instância da classe Instrutor com tratamento de erros
try {
  const instrutor1 = new Instrutor("Carlos", 40, "Masculino", "Educação Física");
  
  // Chamando o método para exibir as informações do instrutor
  instrutor1.exibirInformacoesInstrutor();
} catch (error) {
  console.error("Erro ao criar o instrutor:", error);
}
