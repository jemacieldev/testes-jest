import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState("");

  function cadastraTarefa() {
    setTarefas([...tarefas, tarefaTemp]); // Add new task to tarefas
    setTarefaTemp(""); // Clear input
  }

  return (
    <div className="App">
      <input
        type="text"
        value={tarefaTemp}
        onChange={(event) => setTarefaTemp(event.target.value)} // Correct event handling
      />
      <button onClick={cadastraTarefa} type="button">
        Cadastrar
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li> // Ensure unique keys
        ))}
      </ul>
    </div>
  );
}

export default App;
