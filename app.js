const dataInicio = new Date("2022-04-10T22:38:00"); // Ajuste para sua data real

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Atualiza o texto dentro do <p>
    document.getElementById("anos-texto").textContent = anos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

document.querySelectorAll(".pergunta").forEach(pergunta => {
    const botoes = pergunta.querySelectorAll("button");

    botoes.forEach(button => {
        button.addEventListener("click", function () {
            if (pergunta.classList.contains("respondida")) return;

            // Marca a pergunta como respondida
            pergunta.classList.add("respondida");

            if (this.classList.contains("correto")) {
                this.style.background = "var(--green)";
            } else {
                this.style.background = "var(--red)"; // Resposta errada fica vermelha

                // Destaca a resposta correta
                const correta = pergunta.querySelector(".correto");
                correta.classList.add("destaque");
            }

            // Desativa todos os botões da pergunta
            botoes.forEach(btn => btn.disabled = true);
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');  // Alterna a classe para mostrar/ocultar o menu
}



