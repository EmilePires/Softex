let mensagemVisivel = false;
  function mostrarMensagem(){
    const paragrafo = document.getElementById("mensagem")
     if (mensagemVisivel) {
        // Se a mensagem estiver visível, escondê-la
        paragrafo.textContent = "Acesse a pagina abaixo.";
      } else {
        // Se a mensagem não estiver visível, mostrá-la
        paragrafo.textContent = "Netfake gratis por 1 mes!";
      }

      // Alternar o estado da mensagem
      mensagemVisivel = !mensagemVisivel;
    }