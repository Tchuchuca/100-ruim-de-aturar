var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// Função para validar o CPF
function validarCPF(cpf) {
    var cpfLimpo = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    return cpfLimpo.length === 11; // Validação básica
}
// Função para mostrar mensagens de sucesso ou erro
function mostrarMensagem(mensagem, tipo) {
    alert("".concat(tipo.toUpperCase(), ": ").concat(mensagem));
}
// Exemplo de como armazenar academias no localStorage
var academias = ["Active Life", "Iron Pressure", "Tchuca Gym"];
localStorage.setItem("academias", JSON.stringify(academias));
// Função para carregar academias no select
function carregarAcademias() {
    var academiaSelect = document.getElementById("academia");
    var academias = JSON.parse(localStorage.getItem("academias") || "[]");
    if (academias.length > 0) {
        academias.forEach(function (academia) {
            var option = document.createElement("option");
            option.value = academia;
            option.textContent = academia;
            academiaSelect.appendChild(option);
        });
    }
    else {
        var option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhuma academia cadastrada";
        academiaSelect.appendChild(option);
    }
}
// Função para cadastrar um aluno
(_a = document.getElementById("cadastroAlunosform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Coletando os dados do formulário
    var nome = document.getElementById("nomeAluno").value.trim();
    var idade = parseInt(document.getElementById("idade").value.trim());
    var cpf = document.getElementById("cpf").value.trim();
    var login = document.getElementById("login").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var academia = document.getElementById("academia").value;
    var altura = parseFloat(document.getElementById("altura").value.trim());
    var peso = parseFloat(document.getElementById("peso").value.trim());
    // Verificando se todos os campos foram preenchidos
    if (!nome || !idade || !cpf || !login || !senha || !academia || !altura || !peso) {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }
    // Validando CPF
    if (!validarCPF(cpf)) {
        mostrarMensagem("CPF inválido.", "erro");
        return;
    }
    // Criando o novo aluno usando a classe Aluno
    var novoAluno = new AlunoClass(nome, idade, "Sexo Não Informado", cpf, login, senha, academia, altura, peso);
    // Armazenando o aluno no localStorage
    localStorage.setItem("Aluno", JSON.stringify(novoAluno));
    // Exibindo a mensagem de sucesso
    mostrarMensagem("Aluno cadastrado com sucesso!", "sucesso");
    // Redirecionando após 2 segundos
    setTimeout(function () {
        window.location.href = "acesso-aluno.html";
    }, 2000);
    // Resetando o formulário
    document.getElementById("cadastroAlunosform").reset();
});
// Carregar academias assim que o DOM for carregado
document.addEventListener("DOMContentLoaded", carregarAcademias);
// Classe Aluno - Extende a classe Pessoa e adiciona campos específicos de aluno
var AlunoClass = /** @class */ (function (_super) {
    __extends(AlunoClass, _super);
    function AlunoClass(nome, idade, sexo, cpf, login, senha, academia, altura, peso) {
        var _this = _super.call(this, nome, idade, sexo) || this; // Chama o construtor da classe base (Pessoa)
        _this.cpf = cpf;
        _this.login = login;
        _this.senha = senha;
        _this.academia = academia;
        _this.altura = altura;
        _this.peso = peso;
        return _this;
    }
    // Método para exibir todas as informações (da Pessoa e do Aluno)
    AlunoClass.prototype.exibirInformacoesAluno = function () {
        this.exibirInformacoes(); // Chama o método da classe base (Pessoa)
        console.log("CPF: ".concat(this.cpf));
        console.log("Login: ".concat(this.login));
        console.log("Senha: ".concat(this.senha));
        console.log("Academia: ".concat(this.academia));
        console.log("Altura: ".concat(this.altura, "m"));
        console.log("Peso: ".concat(this.peso, "kg"));
    };
    return AlunoClass;
}(Pessoa));
