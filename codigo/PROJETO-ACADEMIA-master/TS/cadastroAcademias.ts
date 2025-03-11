// Função para validar o CNPJ
export function validarCNPJ(cnpj: string): boolean {
    const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
    return cnpjLimpo.length === 14;
}

// Evento para lidar com o envio do formulário
document.getElementById("cadastroAcademiaForm")?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const nome = (document.getElementById("nomeAcademia") as HTMLInputElement).value.trim();
    const responsavel = (document.getElementById("responsavel") as HTMLInputElement).value.trim();
    const cnpj = (document.getElementById("cnpj") as HTMLInputElement).value.trim();
    const endereco = (document.getElementById("endereco") as HTMLInputElement).value.trim();
    const login = (document.getElementById("login") as HTMLInputElement).value.trim();
    const senha = (document.getElementById("senha") as HTMLInputElement).value.trim();

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
