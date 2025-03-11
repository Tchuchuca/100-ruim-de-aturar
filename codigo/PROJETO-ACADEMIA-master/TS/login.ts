document.getElementById("loginForm")?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    function mostrarMensagem(mensagem: string) {
            alert(mensagem);
    }

    try{
        const loginInput = document.getElementById("username") as HTMLInputElement;
        const senhaInput = document.getElementById("password") as HTMLInputElement;

        const login = loginInput.value.trim();
        const senha = senhaInput.value.trim();

        
        const academias = JSON.parse(localStorage.getItem("academias") || "{}");
        console.log("Dados do LocalStorage (academias):", academias);

        if (!academias || !academias.login || !academias.senha) {
            mostrarMensagem("Nenhuma academia cadastrada. Cadastre-se primeiro.");
            return;
        }

        if (login === academias.login && senha === academias.senha) {
            mostrarMensagem("Login bem-sucedido como administrador!");

            console.log("Login bem-sucedido. Redirecionando para página de administração...");

            window.location.href = "acesso-adm.html";
            return;
        }

        const aluno = JSON.parse(localStorage.getItem("Aluno") || "{}");
        console.log("Dados do LocalStorage (Aluno):", aluno);

        if (!aluno || !aluno.login || !aluno.senha) {
            mostrarMensagem("Nenhum aluno cadastrado em nosso sistema. Cadastre-se primeiro.");
            return;
        }


        if (login === aluno.login && senha === aluno.senha) {
            mostrarMensagem("Login bem-sucedido! Seja Bem-Vindo, aluno.");

            console.log("Login bem-sucedido. Redirecionando para a página do aluno...");

            window.location.href = "acesso-aluno.html"; 
        } else {
            mostrarMensagem("Login ou senha incorretos! Por favor, tente novamente.");
        }
    } catch (error){
        console.error('erro durante o processo do login', error)
    }
});
