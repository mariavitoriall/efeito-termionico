const dataInicio = new Date("2022-04-10T22:38:00-03:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora.getTime() - dataInicio.getTime();

    const umMinuto = 1000 * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;
    const umAno = umDia * 365.25;

    const anos = Math.floor(diferenca / umAno);
    let resto = diferenca % umAno;

    const dias = Math.floor(resto / umDia);
    resto %= umDia;

    const horas = Math.floor(resto / umaHora);
    resto %= umaHora;

    const minutos = Math.floor(resto / umMinuto);
    const segundos = Math.floor((resto % umMinuto) / 1000);

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}
console.log("Agora:", new Date().toString());
console.log("Data Início:", dataInicio.toString());

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



