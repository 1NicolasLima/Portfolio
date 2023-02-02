const nomeElemento = document.querySelector('.meu-nome');
const nomeCompleto = nomeElemento.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const nodeFundo = document.querySelector('#fundo');

nomeElemento.innerHTML = '';

const elementos = {
    nomeElemento,
    botaoVerMais,
    habilidades,
    nodeFundo,
};

/**
 * Adiciona ou remove classes CSS dos elementos de habilidades.
 * @param {HTMLElement} elemento - Elemento de habilidade
 */
function toggleHabilidade(elemento) {
    if (elemento.classList.contains('escondido')) {
        elemento.classList.remove('escondido');
        elemento.classList.add('visivel');
        elementos.botaoVerMais.innerHTML = 'Ver menos';
    } else {
        elemento.classList.add('escondido');
        elemento.classList.remove('visivel');
        elementos.botaoVerMais.innerHTML = 'Ver mais';
    }
}

/**
 * Adiciona um evento de clique ao botão de "Ver mais".
 */
function adicionarCliqueVerMais() {
    elementos.botaoVerMais.addEventListener('click', () => {
        elementos.habilidades.forEach((elemento) => toggleHabilidade(elemento));
    });
}

/**
 * Cria um efeito de escrita no nome do usuário.
 * @param {string} nome - Nome completo do usuário
*/
function escreverNome(nome) {
    setTimeout(() => {
    const nomeCompletoArray = nome.split('');
    elementos.nomeElemento.innerHTML = '';
    nomeCompletoArray.forEach((letra, index) => {
    setTimeout(() => {
    elementos.nomeElemento.innerHTML += letra;
    }, 150 * index);
    });
    }, 1500);
    }
    
    /* escreverNome(nomeCompleto); */
    adicionarCliqueVerMais();

