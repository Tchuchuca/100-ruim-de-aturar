// Simula o comportamento do carregamento do aluno
export const carregarAluno = (): string => {
    const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
  
    // Simulando o comportamento de um elemento HTML
    const nomeAlunoElement: { textContent: string } = {
      textContent: '',
    };
  
    if (aluno && aluno.nome) {
      nomeAlunoElement.textContent = aluno.nome;
    } else {
      nomeAlunoElement.textContent = "Aluno não encontrado";
    }
  
    return nomeAlunoElement.textContent;
  };
  