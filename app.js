const dataInicio = new Date("2022-04-10T22:38:00-03:00");

function atualizarContador() {
    const agora = new Date();

    // Calcula anos completos
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let aniversarioEsteAno = new Date(dataInicio);
    aniversarioEsteAno.setFullYear(dataInicio.getFullYear() + anos);

    if (agora < aniversarioEsteAno) {
        anos -= 1;
        aniversarioEsteAno.setFullYear(dataInicio.getFullYear() + anos);
    }

    // Diferença desde o último "aniversário"
    let diferencaMs = agora - aniversarioEsteAno;

    const umSegundo = 1000;
    const umMinuto = umSegundo * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;

    const dias = Math.floor(diferencaMs / umDia);
    diferencaMs %= umDia;

    const horas = Math.floor(diferencaMs / umaHora);
    diferencaMs %= umaHora;

    const minutos = Math.floor(diferencaMs / umMinuto);
    diferencaMs %= umMinuto;

    const segundos = Math.floor(diferencaMs / umSegundo);

    // Atualiza o contador na página
    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Calcula quanto falta para o próximo aniversário
    const proximoAniversario = new Date(dataInicio);
    proximoAniversario.setFullYear(dataInicio.getFullYear() + anos + 1);
    const faltaMs = proximoAniversario - agora;

    const faltaDias = Math.floor(faltaMs / umDia);
    const faltaHoras = Math.floor((faltaMs % umDia) / umaHora);

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



