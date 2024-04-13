/*
  +
  -
  *
  /

  ++
  --
  +=
  *=
  /=
  %

let price = 10

price = price + 1;
price += 1;

price++;
price--;

price = price % 2;

*/

// Criar uma variavel que recebe um numero

let price = 100;

// Aplicar um desconto de 10%
let desconto = price * 0.1;

let valorComDescont = price - desconto;

// let texto = "De " + price + " por " + valorComDescont;
// let texto = "De ".concat(price, " por ", valorComDescont);
let texto = `De ${price} por ${valorComDescont}`;

console.log(texto);

// exibir no console.log o texto 
// "de (valor original) por (o valor com desconto)"

