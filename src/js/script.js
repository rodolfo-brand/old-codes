import codigos from './codigos.js';
const botoes = document.getElementById('botoes');
codigos.forEach(i => botoes.innerHTML += `<button class="botao"><img src="src/imagens/bau.png" alt=${i}></button>`);
botoes.addEventListener('click', (event) => copyToClipboard(event.target.alt));

function copyToClipboard(codigo) {

    const clickedButton = document.querySelector('.botao:focus');
    if (clickedButton && codigo) {
        navigator.clipboard.writeText(codigo);
        return clickedButton.classList.add('botao-clicado')
    };
}
