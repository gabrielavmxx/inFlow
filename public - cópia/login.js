function entrar() {
    const email = ipt_email.value;
    const terminacom = email.endsWith(".school");

    if (terminacom == true) {
    } else {
      output_email.innerHTML = "O email deve terminar em .school";
      output_email.style.color = 'red';
    }
    const arroba = email.includes("@");
    
    if (arroba == false) {
      output_email.innerHTML = "O email deve conter @";
      output_email.style.color = 'red';
    }
    const minúscula = email === email.toLowerCase();

    if (!minúscula) {
      output_email.innerHTML = `O email deve ser escrito em letra minúscula`;
      output_email.style.color = 'red';
    }

    // Validação da senha

    const senha = ipt_senha.value;
    const tmsenha = senha.length;

    if (tmsenha < 8) {
      output_senha.innerHTML += `A senha deve conter pelo menos 8 caracteres<br>`;
      output_senha.style.color = 'red';  
    }

    const Nsenha = /\d/.test(senha);

    if (!Nsenha) {
      output_senha.innerHTML += 'A senha deve conter pelo menos um número<br>';
      output_senha.style.color = 'red'; 
    }

    const Lsenha = /[A-Z]/.test(senha);

    if (!Lsenha) {
      output_senha.innerHTML += 'A senha deve conter pelo menos uma letra maiúscula<br>'
      output_senha.style.color = 'red';  
    }
    
    const Csenha = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    if (!Csenha) {
      output_senha.innerHTML += 'A senha deve conter pelo menos um caractere especial'
      output_senha.style.color = 'red';
    } else {
        output_senha.innerHTML = '';
    }
 }