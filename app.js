const dataInicio = new Date("2022-04-10T22:38:00-03:00"); // fuso fixo

function atualizarContador() {
    const agora = new Date();

    let diferenca = agora.getTime() - dataInicio.getTime();

    const umMinuto = 1000 * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;
    const umAno = umDia * 365.25;

    const anos = Math.floor(diferenca / umAno);
    diferenca %= umAno;

    const dias = Math.floor(diferenca / umDia);
    diferenca %= umDia;

    const horas = Math.floor(diferenca / umaHora);
    diferenca %= umaHora;

    const minutos = Math.floor(diferenca / umMinuto);
    const segundos = Math.floor((diferenca % umMinuto) / 1000);

    // Exibe os valores na página (ou no console)
    console.log(`Anos: ${anos}`);
    console.log(`Dias: ${dias}`);
    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Segundos: ${segundos}`);

    // Mensagem para o próximo aniversário
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



