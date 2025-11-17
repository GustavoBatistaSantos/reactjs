import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar programação",
      description: "Estudar Programação para se tornar um desenvolvedor full stack",
      isCompleted: false
    },
    {
      id: 2,
      title: "estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false
    },
    {
      id: 3,
      title: "estudar Matemática",
      description: "Estudar Matemática para se tornar um desenvolvedor full stack",
      isCompleted: false
    }
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"/*preenche a altura e a largura da tela inteira, background color, alinhamento responsabilidade e pading */>
    <div className="w-[500px]" /*largura da div, */>
      <h1 /*className= "title" se quiser fazer pelo css*/ className=/*"text-red-500"*/" text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask setTasks={setTasks} />

        {/* Passei o tasks através de props */}
        <Tasks tasks={tasks} />
      </div>
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
