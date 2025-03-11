window.onload = function () {
    var aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
    var nomeAlunoElement = document.getElementById("nomeAluno");
    if (aluno && aluno.nome) {
        nomeAlunoElement.textContent = aluno.nome;
    }
    else {
        nomeAlunoElement.textContent = "Aluno não encontrado";
    }
};
