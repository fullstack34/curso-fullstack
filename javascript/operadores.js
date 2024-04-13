/* Operadores lógicos 

  >
  <
  >=
  <=
  ==
  ===
  !==
  !=
  &&
  ||    -> pipe
*/

let carrinho = 2000;
let minimoParaDarODesconto = 800;
let taxa = 0.1;
let taxa2 = 0.2;

if (carrinho >= minimoParaDarODesconto && carrinho < 1500) {
  console.log(`Aplicando taxa: ${taxa}`)
  carrinho -= carrinho * taxa;

} else if(carrinho >= 1500 && carrinho < 2000) {
  console.log(`Aplicando taxa: ${taxa2}`)
  carrinho -= carrinho * taxa2;
} else {
  console.log('Nenhum desconto foi aplicado');
}

console.log('--------');

console.log(`Valor do carrinho: ${carrinho}`);

