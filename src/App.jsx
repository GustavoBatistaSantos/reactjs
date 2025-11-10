import { useState } from "react";

function App(){/* cria a função componente*/
  //let message = 'olá mundo';/* variavel em java script*/
  const [message, setMessage] = useState('olá, mundo'); //o set message altera o valor do state, useState tem que ter a mensagem inicial

  //state (estado) variavel que atualiza o componente
  return (
  <div>
    <h1>{message}</h1>{/*jsx em ação */}
    <button onClick={() =>{
      setMessage ('Olá, fui clicado');
    }}>Mudar Mensagem</button>{/*cria um botão, o java script sempre vai dentro da chaves */ }
  </div>/* o que ela vai retornar*/ 
  );
}

export default App /* exporta o app*/ 
