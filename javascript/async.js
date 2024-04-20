console.log('Antes do setTimeout');

let timeout = setTimeout(function() {
  
  console.log('Antes do for');
  
  for (let index = 0; index < 10000000000; index++) {}

  console.log('Depois do for');

}, 5000);

clearTimeout(timeout);

console.log('Depois do setTimeout');

console.log('-------------------------------');

let contador = 1;

let interval = setInterval(function(){
  console.log(contador++);

  if(contador === 11) {
    clearInterval(interval);
  }

}, 1000);