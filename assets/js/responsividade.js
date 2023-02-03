
function sizeOfThings() {
    var windowWidth = window.innerWidth;

    if (windowWidth <= 1000) {
        document.querySelector('.texto-descricao').innerHTML = 'Aperte o icone de alguma habilidade para mais detalhes.'
        // window.addEventListener('mouseout', (evento) => {
        //     descricao.innerHTML = 'Aperte o icone de alguma habilidade para mais detalhes.';
        // });
    } else {
        document.querySelector('.texto-descricao').innerHTML = 'Clique no icone de alguma habilidade para mais detalhes.'
    }

};
sizeOfThings();

window.addEventListener('resize', function () {
    sizeOfThings();
});