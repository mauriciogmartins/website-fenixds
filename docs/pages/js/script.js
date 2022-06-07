let count = 0;
let controleManual = false;

setInterval(() => {
    if (controleManual === false)
        slidesShow();
}, 6000);

function slidesShow() {
    let slide = document.getElementById('slideshow-itens-inicio');
    document.getElementById(`radio-slides-${count + 1}`).checked = true;

    slide.style.cssText =
        `margin-left: -${100 * count}%;
         transition: 0.8s;`;

    count++;
    if (count > 3)
        count = 0;
}

function navegacaoManual(index) {
    controleManual = true;

    let slide = document.getElementById('slideshow-itens-inicio');
    document.getElementById(`radio-slides-${index}`).checked = true;

    slide.style.cssText =
        `margin-left: -${100 * (index - 1)}%;
         transition: 0.8s;`;

    count = index - 1;
    controleManual = true;
}

function home() {
    window.location.href = "index.html";
}

function carregarHTML(pagina) {
    $("#conteudo").load(pagina);
}