(function () {
    function abrirCadastroAluno() {
        window.open("novos-alunos.html", "_blank", "width=600,height=700");
    }
    function abrirCadastroInstrutor() {
        window.open("novos-instrutores.html", "_blank", "width=600,height=700");
    }
    function abrirCadastroPlanoTreino() {
        window.open("novos-planosTreinos.html", "_blank", "width=600,height=700");
    }
    function abrirCadastroExercicio() {
        window.open("novos-exercicios.html", "_blank", "width=600,height=700");
    }
});
function excluirAluno(index) {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.splice(index, 1);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    listarAlunos();
    alert("Aluno excluído com sucesso!");
}
function excluirInstrutor(index) {
    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    instrutores.splice(index, 1);
    localStorage.setItem("instrutores", JSON.stringify(instrutores));
    listarInstrutores();
    alert("Instrutor excluído com sucesso!");
}
function excluirPlanoTreino(index) {
    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    planos.splice(index, 1);
    localStorage.setItem("planosTreino", JSON.stringify(planos));
    listarPlanosTreino();
    alert("Plano de treino excluído com sucesso!");
}
function excluirExercicio(index) {
    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    exercicios.splice(index, 1);
    localStorage.setItem("exercicios", JSON.stringify(exercicios));
    listarExercicios();
    alert("Exercício excluído com sucesso!");
}
function listarAlunos() {
    var _a;
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const tabela = (_a = document.getElementById("tabelaAlunos")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        alunos.forEach((aluno, index) => {
            const row = tabela.insertRow();
            row.insertCell(0).textContent = aluno.nome;
            row.insertCell(1).textContent = aluno.idade.toString();
            row.insertCell(2).textContent = aluno.altura.toString();
            row.insertCell(3).textContent = aluno.peso.toString();
            row.insertCell(4).textContent = aluno.imc.toString();
            row.insertCell(5).textContent = aluno.objetivo;
            const deleteCell = row.insertCell(6);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "btn-delete";
            deleteButton.onclick = () => excluirAluno(index);
            deleteCell.appendChild(deleteButton);
        });
    }
}
function listarInstrutores() {
    var _a;
    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    const tabela = (_a = document.getElementById("tabelaInstrutores")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        instrutores.forEach((instrutor, index) => {
            const row = tabela.insertRow();
            row.insertCell(0).textContent = instrutor.nome;
            row.insertCell(1).textContent = instrutor.idade.toString();
            row.insertCell(2).textContent = instrutor.formacao;
            row.insertCell(3).textContent = instrutor.email;
            row.insertCell(4).textContent = instrutor.contato;
            const deleteCell = row.insertCell(5);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "btn-delete";
            deleteButton.onclick = () => excluirInstrutor(index);
            deleteCell.appendChild(deleteButton);
        });
    }
}
function listarPlanosTreino() {
    var _a;
    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    const tabela = (_a = document.getElementById("tabelaPlanosTreino")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        planos.forEach((plano, index) => {
            const row = tabela.insertRow();
            row.insertCell(0).textContent = plano.nome;
            row.insertCell(1).textContent = plano.descricao;
            row.insertCell(2).textContent = plano.duracao.toString();
            const deleteCell = row.insertCell(3);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "btn-delete";
            deleteButton.onclick = () => excluirPlanoTreino(index);
            deleteCell.appendChild(deleteButton);
        });
    }
}
function listarExercicios() {
    var _a;
    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    const tabela = (_a = document.getElementById("tabelaExercicios")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        exercicios.forEach((exercicio, index) => {
            const row = tabela.insertRow();
            row.insertCell(0).textContent = exercicio.nome;
            row.insertCell(1).textContent = exercicio.grupoMuscular;
            row.insertCell(2).textContent = exercicio.repeticoes.toString();
            row.insertCell(3).textContent = exercicio.carga.toString();
            const deleteCell = row.insertCell(4);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "btn-delete";
            deleteButton.onclick = () => excluirExercicio(index);
            deleteCell.appendChild(deleteButton);
        });
    }
}
window.onload = () => {
    listarAlunos();
    listarInstrutores();
    listarPlanosTreino();
    listarExercicios();
};
