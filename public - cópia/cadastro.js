function entrar() {
  const nomeU = ipt_nomeUsuario.value;
  if (nomeU === "") {
    nome.innerHTML = `O campo de nome não pode estar vazio`;
    nome.style.color = "red";
  } else {
    nome.innerHTML = ``;
  }

  const Empresa = ipt_nomeEmpresa.value;
  if (Empresa === "") {
    empresa.innerHTML = `O campo do nome da empresa não pode estar vazio`;
    empresa.style.color = "red";
  } else {
    empresa.innerHTML = ``;
  }

  // email

  const email = ipt_email.value;
  if (email == "") {
    output.innerHTML = `O campo email não pode estar vazio`;
    output.style.color = "red";
  } else {
    const emailconf = ipt_emailConfirmar.value;

    if (emailconf != email) {
      confirmacao.innerHTML = `Os emails devem ser iguais`;
      confirmacao.style.color = "red";
    } else {
      confirmacao.innerHTML = ``;
    }

    const terminacom = email.endsWith(".school");

    if (terminacom == true) {
      output.innerHTML = "";
    }
    const arroba = email.includes("@");

    if (arroba == false) {
      output.innerHTML = "O email deve conter @<br>";
      output.style.color = "red";
    } 
    const minúscula = email === email.toLowerCase();

    if (!minúscula) {
      output.innerHTML += `O email deve ser escrito em letra minúscula<br>`;
      output.style.color = "red";
    }
  }

  // senha 
  const senha = ipt_senha.value;
  const tmsenha = senha.length;

  if (tmsenha < 8) {
    dsenha.innerHTML += `A senha deve conter pelo menos 8 caracteres<br>`;
    dsenha.style.color = 'red';  
  }

  const Nsenha = /\d/.test(senha);

  if (!Nsenha) {
    dsenha.innerHTML += 'A senha deve conter pelo menos um número<br>';
    dsenha.style.color = 'red'; 
  }

  const Lsenha = /[A-Z]/.test(senha);

  if (!Lsenha) {
    dsenha.innerHTML += 'A senha deve conter pelo menos uma letra maiúscula<br>'
    dsenha.style.color = 'red';  
  }
  
  const Csenha = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  if (!Csenha) {
    dsenha.innerHTML += 'A senha deve conter pelo menos um caractere especial'
    dsenha.style.color = 'red';
  } else {
      dsenha.innerHTML = '';
  }
}
