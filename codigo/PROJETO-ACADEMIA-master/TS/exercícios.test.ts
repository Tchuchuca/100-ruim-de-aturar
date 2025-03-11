// Exercicio.test.ts
import { Exercicio } from './exercícios';  // Importando a classe Exercicio

describe('Exercicio', () => {
  
  // Teste para exercício do tipo Cardio
  test('Deve criar um exercício de Cardio corretamente', () => {
    const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
    
    expect(corrida.nome).toBe("Corrida");
    expect(corrida.tipo).toBe("Cardio");
    expect(corrida.duracao).toBe(30);
    expect(corrida.repeticoes).toBeUndefined();
    expect(corrida.series).toBeUndefined();
    expect(corrida.descricao).toBe("Corrida na esteira");
  });

  // Teste para exercício do tipo Musculação
  test('Deve criar um exercício de Musculação corretamente', () => {
    const supino = new Exercicio("Supino", "Musculação", undefined, 12, 4, "Exercício para peito");

    expect(supino.nome).toBe("Supino");
    expect(supino.tipo).toBe("Musculação");
    expect(supino.duracao).toBeUndefined();
    expect(supino.repeticoes).toBe(12);
    expect(supino.series).toBe(4);
    expect(supino.descricao).toBe("Exercício para peito");
  });

  // Teste para o método exibirInformacoes()
  test('Deve exibir as informações corretamente', () => {
    const corrida = new Exercicio("Corrida", "Cardio", 30, undefined, undefined, "Corrida na esteira");
    
    // Mock do console.log
    console.log = jest.fn();

    corrida.exibirInformacoes();

    expect(console.log).toHaveBeenCalledWith('Exercício: Corrida');
    expect(console.log).toHaveBeenCalledWith('Tipo: Cardio');
    expect(console.log).toHaveBeenCalledWith('Duração: 30 minutos');
    expect(console.log).toHaveBeenCalledWith('Descrição: Corrida na esteira');
  });

  // Teste quando a descrição não é fornecida
  test('Não deve exibir a descrição se não for fornecida', () => {
    const corrida = new Exercicio("Corrida", "Cardio", 30);
    
    // Mock do console.log
    console.log = jest.fn();

    corrida.exibirInformacoes();

    expect(console.log).toHaveBeenCalledWith('Exercício: Corrida');
    expect(console.log).toHaveBeenCalledWith('Tipo: Cardio');
    expect(console.log).toHaveBeenCalledWith('Duração: 30 minutos');
    expect(console.log).not.toHaveBeenCalledWith('Descrição:');
  });

});
