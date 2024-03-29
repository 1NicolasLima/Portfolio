const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
  '<h3>TypeScript</h3><p>O TypeScript é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática e recursos de orientação a objetos, tornando o código mais seguro e legível.</p>',
  '<h3>ReactJS</h3><p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>',
  '<h3>Node</h3><p>O Node.js é uma plataforma de tempo de execução de JavaScript que permite a execução de código JavaScript no servidor, facilitando o desenvolvimento de aplicativos web e servidores.</p>',
  '<h3>JavaScript</h3><p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p>',
  '<h3>CSS</h3><p>É um mecanismo para adicionar estilo a um documento web.</p>',
  // '<h3>NextJs</h3><p>O Next.js é um framework de desenvolvimento web React que simplifica a criação de aplicativos web modernos, oferecendo funcionalidades como renderização do lado do servidor e roteamento.</p>',
  '<h3>Git</h3><p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p>',
  '<h3>Github</h3><p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p>'
];
const dataInicio = [
  (new Date(2022, 2, 1)).getTime(),
  (new Date(2021, 10, 1)).getTime(),
  (new Date(2022, 0, 1)).getTime(),
  (new Date(2022, 3, 1)).getTime(),
  (new Date(2022, 1, 1)).getTime(),
  (new Date(2021, 11, 1)).getTime(),
  (new Date(2021, 11, 1)).getTime(),
  (new Date(2021, 11, 1)).getTime(),
];
const dataHoje = (new Date()).getTime();
const meses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

for (let i = 0; i < skills.length; i++) {
  const elemento = skills[i];
  const index = i;
  elemento.addEventListener('click', (evento) => {
    const tempoDeExperiencia = Math.round((dataHoje - dataInicio[index]) / (1000 * 60 * 60 * 24 * 30));
    descricao.innerHTML = `<p>${sobreSkill[index]} </p><p>Tempo de experiência: ${tempoDeExperiencia} ${tempoDeExperiencia > 1 ? 'meses' : 'mês'}</p>`;
  });
  // elemento.addEventListener('mouseout', (evento) => {
  //   descricao.innerHTML = 'Passe o mouse por cima de alguma habilidade para ler a descrição.';
  // });
}





