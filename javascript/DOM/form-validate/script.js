
let inputEmail = document.getElementById('input-email');
let inputSenha = document.getElementById('input-senha');
let formLogin = document.getElementById('form-login');
let emailError = document.getElementById('email-error');
let senhaError = document.getElementById('senha-error');

formLogin.addEventListener('submit', function(event) {

  let emailLength = inputEmail.value.length 
  let senhaLength = inputSenha.value.length 

  if (!emailLength || !senhaLength) {
    alert("Email e senha precisam ser preenchidos!");
    event.preventDefault();
  }

});
