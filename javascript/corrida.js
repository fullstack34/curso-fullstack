
function defineVelocidade(velocidade) {
  return parseInt(velocidade + (Math.random() * 10) + 1);
}

let carros = [
  { nome: "Relampago Marquinhos", velocidade: defineVelocidade(0), distancia: 0 },
  { nome: "Opala Preto", velocidade: defineVelocidade(0), distancia: 0 },
  { nome: "Uno com escada no teto", velocidade: defineVelocidade(0), distancia: 0 }
];

function atualizaCorrida() {
  let vencedor;

  for (let carro of carros ) {
    carro.distancia += defineVelocidade(carro.velocidade);
    if(!vencedor && carro.distancia >= 200) {
      vencedor = carro.nome;
    }
    console.log(`${carro.nome} - Andou: ${carro.distancia} km`)
  }

  if(vencedor) {
    console.log(`${vencedor} venceu a corrida!`);
    clearInterval(interval);
  }
  console.log('-------------');

}

let interval = setInterval(atualizaCorrida, 1500);