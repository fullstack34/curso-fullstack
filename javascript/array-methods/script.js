import apiResponse from './products.js';

/** 
 * REDUCE
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
 * */
let total = apiResponse.reduce((total, product) => (product.price) + total, 0)

console.log("Média de preço dos produtos: ", total / apiResponse.length);

/** 
 * MAP
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
 * */
let productsWithDiscount = apiResponse.map((product, index) => {
    product.original_price = product.price;
    product.price *= 0.1;
    return product;
});

console.log("Adicionando desconto de 10% no preço:", productsWithDiscount);

/** 
 * SORT
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
 * */
let rating = apiResponse.sort((product1, product2) => product2.rating.rate - product1.rating.rate);
console.log("Melhores avaliados: ", rating);

/**
 * FIND
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
 * */
let product10 = apiResponse.find((product) => product.id === 10);
console.log(product10);

/** 
 * FILTER 
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * */
let electronics = apiResponse.filter((product) => product.category === 'electronics');
console.log("Produtos da categoria electronics: ", electronics);

/** 
 * EVERY 
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * */
let productGt100 = apiResponse.every((product) => product.price < 100);
console.log("Todos os preços são maiores do que 100? ", productGt100);

/**
 * SOME
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
 * */
let product100 = apiResponse.some((product) => product.price > 100);
console.log("Pelo menos 1 produto tem o preço maior que 100?: ", product100);