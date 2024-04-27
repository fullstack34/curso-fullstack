
console.log('codigo fora da função');

let alunos = [
  "Francisclaidson"
];

function exibirAlunos(listaDeAlunos, quantidade) {
  console.log(listaDeAlunos);
  console.log(quantidade);
}


let nomeDoAluno = "Francisclaidson";

function converterEmLetrasMaiusculas(aluno) {
  return aluno.toUpperCase();
}

let letras = converterEmLetrasMaiusculas(nomeDoAluno);

let soma = function(n1, n2) {
  return n1 + n2;
}

let subtrair = function(n1, n2) {
  return n1 - n2;
}

function calculadora (n1, n2, action, action2) {
  if(n1 > n2) {
    return action2(n1, n2);
  }
  
  return action(n1, n2);
}

let resultado = calculadora(20, 10, function(n1, n2) {return n1 - n2;}, soma);

console.log(resultado);
