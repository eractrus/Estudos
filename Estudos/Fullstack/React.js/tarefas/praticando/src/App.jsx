import { useEffect, useState } from "react";

function App() {
  const [inputDados, setInputDados] = useState(""); // Inicialize inputDados com uma string vazia
  const [tarefas, setTarefas] = useState([
    'Pagar Mensalidade da faculdade',
    'Pagar financiamento do AP'
  ]);

  useEffect(() => {
    try {
      const dadosLocalStorage = localStorage.getItem('dbTarefa');
      if (dadosLocalStorage) {
        setTarefas(JSON.parse(dadosLocalStorage));
      }
    } catch (error) {
      console.error("Erro ao analisar JSON do localStorage:", error);
      // Lidar com o erro aqui, talvez definindo um valor padrão para tarefas
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem('dbTarefa', JSON.stringify(tarefas));
  }, [tarefas]);

 

  function registrar(e) {
    e.preventDefault();
    setTarefas([...tarefas, inputDados]);
    setInputDados(""); // Limpe o campo de entrada após o envio do formulário
  }

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>

      <form onSubmit={registrar}>
        <input
          placeholder="Digite aqui sua tarefa"
          value={inputDados}
          onChange={(e) => setInputDados(e.target.value)}
        />
        <br />

        <button type="submit">Cadastrar</button>
      </form>
      <br /><br />

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
