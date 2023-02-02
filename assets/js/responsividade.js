const paragrafoHab = document.querySelector('.texto-descricao')

const screen = {
    'Aperte no Icone para ler a descrição': 400,
};

window.addEventListener('resize', resizeHandler);

resizeHandler()

function resizeHandler() {
    const iw = window.innerWidth

    let size = null

    for (let s in screen) {
        if (iw >= screen[s]) size = s
    }
    paragrafoHab.innerHTML = size
}