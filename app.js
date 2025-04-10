const dataInicio = new Date("2022-04-10T22:38:00-03:00");

function atualizarContador() {
    const agora = new Date();

    let segundosTotais = Math.floor((agora - dataInicio) / 1000);

    const segundosPorAno = 365.25 * 24 * 60 * 60;
    const segundosPorDia = 24 * 60 * 60;
    const segundosPorHora = 60 * 60;
    const segundosPorMinuto = 60;

    const anos = Math.floor(segundosTotais / segundosPorAno);
    segundosTotais -= anos * segundosPorAno;

    const dias = Math.floor(segundosTotais / segundosPorDia);
    segundosTotais -= dias * segundosPorDia;

    const horas = Math.floor(segundosTotais / segundosPorHora);
    segundosTotais -= horas * segundosPorHora;

    const minutos = Math.floor(segundosTotais / segundosPorMinuto);
    const segundos = segundosTotais % segundosPorMinuto;

    // Atualiza o contador na página
    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Cálculo da mensagem no console
    const proximoAniversario = new Date(dataInicio);
    proximoAniversario.setFullYear(dataInicio.getFullYear() + anos + 1);

    const faltaMs = proximoAniversario - agora;
    const faltaSegundos = Math.floor(faltaMs / 1000);

    const faltaDias = Math.floor(faltaSegundos / (60 * 60 * 24));
    const faltaHoras = Math.floor((faltaSegundos % (60 * 60 * 24)) / (60 * 60));

    console.log(`Faltam ${faltaDias} dias e ${faltaHoras} horas para completar ${anos + 1} anos.`);
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



