function entrar() {
    const email = ipt_email.value;
    const terminacom = email.endsWith(".school");

    if (terminacom == true) {
    } else {
      output.innerHTML = "O email deve terminar em .school";
      output.style.color = 'red';
    }
    const arroba = email.includes("@");
    
    if (arroba == false) {
      output.innerHTML = "O email deve conter @";
      output.style.color = 'red';
    }
    const minúscula = email === email.toLowerCase();

    if (!minúscula) {
      output.innerHTML = `O email deve ser escrito em letra minúscula`;
      output.style.color = 'red';
    }

    // Validação da senha

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