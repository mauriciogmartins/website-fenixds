let count = 1;


setInterval(() => {
    proximaImagem();
}, 6000);

function proximaImagem() {
    count++;
    if (count > 4) {
        count = 1
    }

    document.getElementById(`radio-slides-${count}`).checked = true;
}

function carregarHTML(pagina) {
    $("#home").load(pagina);
}

function home() {
    window.location.href = "index.html";
}

