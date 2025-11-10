import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
//import'./App.css'
function App(){
  return(
    <div>
    <h1 /*className= "title" se quiser fazer pelo css*/ className="text-red-500">Gerenciador de tarefas</h1>
    <AddTask/>
    <Tasks/>
    </div>
  );
}

export default App;

//import { useState } from "react";

//function App(){/* cria a função componente*/
  ////let message = 'olá mundo';/* variavel em java script*/
  //const [message, setMessage] = useState('olá, mundo'); //o set message altera o valor do state, useState tem que ter a mensagem inicial

  ////state (estado) variavel que atualiza o componente
  //return (
  //<div>
    //<h1>{message}</h1>{/*jsx em ação */}
    //<button onClick={() =>{
      //setMessage ('Olá, fui clicado');
    //}}>Mudar Mensagem</button>{/*cria um botão, o java script sempre vai dentro da chaves */ }
  //</div>/* o que ela vai retornar*/ 
  //);
//}

//export default App /* exporta o app*/ 
