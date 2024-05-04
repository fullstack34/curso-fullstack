
const elements = {
  inputEmail: document.getElementById('input-email'),
  inputSenha: document.getElementById('input-senha'),
  formLogin: document.getElementById('form-login')
}

const showEmailError = (msg) => {
  elements.emailError.textContent = msg;
}

const showSenhaError = (msg) => {
  elements.senhaError.textContent = msg;
}

const showError = (msg, elementId) => {
  document.getElementById(elementId).textContent = msg;
}

elements.formLogin.addEventListener('submit', (event) => {

  let emailLength = elements.inputEmail.value.length;
  let senhaLength = elements.inputSenha.value.length;

  showError('', 'email-error');
  // emailError.textContent = '';
  showError('', 'senha-error');
  //senhaError.textContent = '';

  if(!emailLength) {
    showError("Email é um campo obrigatorio", 'email-error');
    // showEmailError("Email é um campo obrigatorio");
    // emailError.textContent = "Email é um campo obrigatorio"
    event.preventDefault();
  } else if(emailLength < 3) {
    showError('Email precisa ter no minimo 3 caracteres', 'email-error');
  }
  if (!senhaLength) {
    showError("Senha é um campo obrigatorio", 'senha-error');
    // showSenhaError("Senha é um campo obrigatorio");
    // senhaError.textContent = "Senha é um campo obrigatorio"
    event.preventDefault();
  }

});
