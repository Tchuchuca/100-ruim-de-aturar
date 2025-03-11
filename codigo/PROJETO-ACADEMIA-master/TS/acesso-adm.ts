(function() {
function abrirCadastroAluno(): void {
    window.open("novos-alunos.html", "_blank", "width=600,height=700");
}

function abrirCadastroInstrutor(): void {
    window.open("novos-instrutores.html", "_blank", "width=600,height=700");
}

function abrirCadastroPlanoTreino(): void {
    window.open("novos-planosTreinos.html", "_blank", "width=600,height=700");
}

function abrirCadastroExercicio(): void {
    window.open("novos-exercicios.html", "_blank", "width=600,height=700");
}
})
export function excluirAluno(index: number): void {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.splice(index, 1);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    listarAlunos();
    alert("Aluno excluído com sucesso!");
}

export function excluirInstrutor(index: number): void {
    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    instrutores.splice(index, 1);
    localStorage.setItem("instrutores", JSON.stringify(instrutores));
    listarInstrutores();
    alert("Instrutor excluído com sucesso!");
}

export function excluirPlanoTreino(index: number): void {
    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    planos.splice(index, 1);
    localStorage.setItem("planosTreino", JSON.stringify(planos));
    listarPlanosTreino();
    alert("Plano de treino excluído com sucesso!");
}

export function excluirExercicio(index: number): void {
    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    exercicios.splice(index, 1);
    localStorage.setItem("exercicios", JSON.stringify(exercicios));
    listarExercicios();
    alert("Exercício excluído com sucesso!");
}


export function listarAlunos(): void {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const tabela = document.getElementById("tabelaAlunos")?.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        alunos.forEach((aluno: any, index: number) => {
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

export function listarInstrutores(): void {
    const instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    const tabela = document.getElementById("tabelaInstrutores")?.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        instrutores.forEach((instrutor: any, index: number) => {
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
export function listarPlanosTreino(): void {
    const planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    const tabela = document.getElementById("tabelaPlanosTreino")?.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        planos.forEach((plano: any, index: number) => {
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

export function listarExercicios(): void {
    const exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    const tabela = document.getElementById("tabelaExercicios")?.querySelector("tbody");
    if (tabela) {
        tabela.innerHTML = "";
        exercicios.forEach((exercicio: any, index: number) => {
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