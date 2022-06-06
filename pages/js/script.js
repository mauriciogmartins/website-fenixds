let count = 1;
let ativo = true;

setInterval(() => {
    if (ativo === true) {
        proximaImagem();
    }
}, 6000);

function proximaImagem() {
    count++;
    if (count > 4) {
        count = 1
    }

    document.getElementById(`radio-slides-${count}`).checked = true;
}

function focarImagem(index) {
    ativo = false;
    count = index;
    document.getElementById(`radio-slides-${count}`).checked = true;
    clearInterval();
    ativo = true;
}

function carregarHTML(pagina) {
    $("#home").load(pagina);
}

function home() {
    window.location.href = "index.html";
}

