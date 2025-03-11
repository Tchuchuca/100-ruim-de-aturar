var _a;
// Função para validar o CNPJ
function validarCNPJ(cnpj) {
    const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14;
}
// Evento para lidar com o envio do formulário
(_a = document.getElementById("cadastroAcademiaForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nomeAcademia").value.trim();
    const responsavel = document.getElementById("responsavel").value.trim();
    const cnpj = document.getElementById("cnpj").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (!validarCNPJ(cnpj)) {
        alert("CNPJ inválido.");
        return;
    }
    // Cria e salva a nova academia
    const novaAcademia = { nome, responsavel, cnpj, endereco, login, senha };
    const academias = JSON.parse(localStorage.getItem("academias") || "[]");
    academias.push(novaAcademia);
    localStorage.setItem("academias", JSON.stringify(academias));
    alert("Academia cadastrada com sucesso!");
    window.location.href = "acesso-adm.html"; // Redirecionar
});
