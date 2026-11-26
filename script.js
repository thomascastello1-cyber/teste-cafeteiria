document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.querySelector("#botao-contato");
    const informacaoContato = document.querySelector("#informacao-contato");

    if (botaoContato && informacaoContato) {
        botaoContato.addEventListener("click", function () {
            informacaoContato.textContent =
                "Telefone: (11) 99999-9999 | Endereço: Rua das Flores, 123";
        });
    }
});
