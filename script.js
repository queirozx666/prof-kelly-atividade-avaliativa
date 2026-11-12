const fotos = [
    { 'id': '1', 'url': './img/chrono.jpg' },
    { 'id': '2', 'url': './img/inuyasha.jpg' },
    { 'id': '3', 'url': './img/tenchi.jpg' },
    { 'id': '4', 'url': './img/tenjoutenge.jpg' },
    { 'id': '5', 'url': './img/yuyu.jpg' },
    { 'id': '6', 'url': './img/yu-gi-oh.jpg' }
];

const caixa = document.querySelector('#container-items');

const montaCarrosel = (lista, div) => {
    for (let contador = 0; contador < lista.length; contador++) {
        div.innerHTML += `
            <div class="item">
                <img src="${lista[contador].url}" alt="Imagem ${lista[contador].id}">
            </div>
        `;
    }
};

montaCarrosel(fotos, caixa);

let minhasDivs = document.querySelectorAll('.item');

const botaoVoltar = document.querySelector('#previous');
const botaoAvancar = document.querySelector('#next');

const proxima = () => {
    caixa.appendChild(minhasDivs[0]);
    minhasDivs = document.querySelectorAll('.item');
};

const voltar = () => {
    const ultimo = minhasDivs[minhasDivs.length - 1];
    caixa.insertBefore(ultimo, minhasDivs[0]);
    minhasDivs = document.querySelectorAll('.item');
};

botaoAvancar.addEventListener('click', proxima);
botaoVoltar.addEventListener('click', voltar);