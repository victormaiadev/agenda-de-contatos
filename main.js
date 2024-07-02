const formulario = document.getElementById("form-agenda");
const corpoTabela = document.querySelector(".tabela tbody");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nomeInput = formulario.querySelector('input[placeholder="Nome do contato"]');
    const numeroInput = formulario.querySelector('input[placeholder="Número do contato"]');
    
    const nome = nomeInput.value.trim();
    const numero = numeroInput.value.trim();

    if (nome && numero) {
        // Criar uma nova linha na tabela
        const novaLinha = document.createElement("tr");

        const celulaNome = document.createElement("td");
        celulaNome.textContent = nome;

        const celulaNumero = document.createElement("td");
        celulaNumero.textContent = numero;

        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaNumero);

        corpoTabela.appendChild(novaLinha);

        // Limpar os campos do formulário
        nomeInput.value = '';
        numeroInput.value = '';
    }
});
