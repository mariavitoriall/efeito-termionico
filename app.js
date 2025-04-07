const dataInicio = new Date("2022-04-10T22:38:00-03:00");
console.log(dataInicio.toString());



function atualizarContador() {
    const agora = new Date();

    // Corrige a data de início para o equivalente em UTC (22:38 no GMT-3 = 01:38 do dia seguinte em UTC)
    const dataInicio = new Date(Date.UTC(2022, 3, 10, 22 - 5, 38 - 16)); // 10 de abril de 2022, 22:38 GMT-3

    let diferenca = agora.getTime() - dataInicio.getTime();

    // Define constantes
    const umMinuto = 1000 * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;
    const umAno = umDia * 365.25; // levando em conta anos bissextos

    // Extrai os valores com precisão
    const anos = Math.floor(diferenca / umAno);
    diferenca %= umAno;

    const dias = Math.floor(diferenca / umDia);
    diferenca %= umDia;

    const horas = Math.floor(diferenca / umaHora);
    diferenca %= umaHora;

    const minutos = Math.floor(diferenca / umMinuto);
    const segundos = Math.floor((diferenca % umMinuto) / 1000);

    // Atualiza os elementos na página
    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

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



