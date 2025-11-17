function Tasks(props){
    console.log(props)
    /*props é o padrão dos componentes para passar o valor do state, o console mostra o props */
    return <ul className="space-y-4"/* espaçamento*/>{props.tasks.map((tasks) =>(
    <li className="bg-slate-400 text-white p-2 rounded-md">{tasks.title}</li>/*para cada props retorna um item da lista*/
    /*rounded-md é o border radius*/
    ))}</ul>
    /*<h1>{props.tasks[1].title}</h1> mostra as tarefas*/ 
}

export default Tasks;