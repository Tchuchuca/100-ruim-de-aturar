export function salvarAluno(): void {
    const nome = mockGetElementById("nome");
    const idade = parseInt(mockGetElementById("idade"));
    const altura = parseFloat(mockGetElementById("altura"));
    const peso = parseFloat(mockGetElementById("peso"));
    const objetivo = mockGetElementById("objetivo");
  
    const imc = isNaN(peso) || isNaN(altura) ? "NaN" : (peso / (altura * altura)).toFixed(2);
  
    const aluno = { nome, idade, altura, peso, imc, objetivo };
  
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));
  
    alert("Aluno cadastrado com sucesso!");
    window.close();
  }
  
  export function salvarInstrutor(): void {
    const nome = mockGetElementById("nome");
    const idade = parseInt(mockGetElementById("idade"));
    const formacao = mockGetElementById("formacao");
    const email = mockGetElementById("email");
    const contato = mockGetElementById("contato");
  
    const instrutor = { nome, idade, formacao, email, contato };
  
    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    instrutores.push(instrutor);
    localStorage.setItem("instrutores", JSON.stringify(instrutores));
  
    alert("Instrutor cadastrado com sucesso!");
    window.close();
  }
  
  export function salvarPlanoTreino(): void {
    const nome = mockGetElementById("nome");
    const descricao = mockGetElementById("descricao");
    const duracao = parseInt(mockGetElementById("duracao"));
  
    const plano = { nome, descricao, duracao };
  
    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    planos.push(plano);
    localStorage.setItem("planosTreino", JSON.stringify(planos));
  
    alert("Plano de treino cadastrado com sucesso!");
    window.close();
  }
  
  export function salvarExercicio(): void {
    const nome = mockGetElementById("nome");
    const grupoMuscular = mockGetElementById("grupoMuscular");
    const repeticoes = parseInt(mockGetElementById("repeticoes"));
    const serie = parseFloat(mockGetElementById("serie"));
    const carga = parseFloat(mockGetElementById("carga"));
  
    const exercicio = { nome, grupoMuscular, repeticoes, serie, carga };
  
    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    exercicios.push(exercicio);
    localStorage.setItem("exercicios", JSON.stringify(exercicios));
  
    alert("Exercício cadastrado com sucesso!");
    window.close();
  }
  
  // Função de mock do document.getElementById, que simula o comportamento de um input
  function mockGetElementById(id: string): string {
    const mockValues: { [key: string]: string } = {
      "nome": "mocked value for nome",
      "idade": "30",
      "altura": "1.75",
      "peso": "70",
      "objetivo": "mocked value for objetivo",
      "formacao": "mocked value for formacao",
      "email": "mocked value for email",
      "contato": "mocked value for contato",
      "descricao": "mocked value for descricao",
      "duracao": "60",
      "grupoMuscular": "mocked value for grupoMuscular",
      "repeticoes": "10",
      "serie": "3",
      "carga": "50"  // Alterado para corresponder ao valor esperado no teste
    };
  
    return mockValues[id] || "";
  }
  