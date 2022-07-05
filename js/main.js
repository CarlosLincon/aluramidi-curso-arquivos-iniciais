const botoes = document.querySelectorAll('.tecla');

const som = document.querySelectorAll('.som');

var cont = 0;

function tocandoSom(botao, sons) {
    botao.addEventListener("click", () => {
        sons.play();
    })
}

while (cont < botoes.length) {
    tocandoSom(botoes[cont], som[cont]);
    cont++;
}