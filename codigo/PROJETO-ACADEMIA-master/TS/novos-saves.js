function salvarAluno() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var objetivo = document.getElementById("objetivo").value;
    var imc = (peso / (altura * altura)).toFixed(2);
    var aluno = { nome: nome, idade: idade, altura: altura, peso: peso, imc: imc, objetivo: objetivo };
    var alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    alert("Aluno cadastrado com sucesso!");
    window.close();
}
function salvarInstrutor() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var formacao = document.getElementById("formacao").value;
    var email = document.getElementById("email").value;
    var contato = document.getElementById("contato").value;
    var instrutor = { nome: nome, idade: idade, formacao: formacao, email: email, contato: contato };
    var instrutores = JSON.parse(localStorage.getItem("instrutores") || "[]");
    instrutores.push(instrutor);
    localStorage.setItem("instrutores", JSON.stringify(instrutores));
    alert("Instrutor cadastrado com sucesso!");
    window.close();
}
function salvarPlanoTreino() {
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var duracao = parseInt(document.getElementById("duracao").value);
    var plano = { nome: nome, descricao: descricao, duracao: duracao };
    var planos = JSON.parse(localStorage.getItem("planosTreino") || "[]");
    planos.push(plano);
    localStorage.setItem("planosTreino", JSON.stringify(planos));
    alert("Plano de treino cadastrado com sucesso!");
    window.close();
}
function salvarExercicio() {
    var nome = document.getElementById("nome").value;
    var grupoMuscular = document.getElementById("grupoMuscular").value;
    var repeticoes = parseInt(document.getElementById("repeticoes").value);
    var serie = parseFloat(document.getElementById("carga").value);
    var carga = parseFloat(document.getElementById("carga").value);
    var exercicio = { nome: nome, grupoMuscular: grupoMuscular, repeticoes: repeticoes, serie: serie, carga: carga };
    var exercicios = JSON.parse(localStorage.getItem("exercicios") || "[]");
    exercicios.push(exercicio);
    localStorage.setItem("exercicios", JSON.stringify(exercicios));
    alert("Exercício cadastrado com sucesso!");
    window.close();
}
