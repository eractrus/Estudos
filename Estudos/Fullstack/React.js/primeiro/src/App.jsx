import { useState } from "react";// importando Hook 

function App() {//função

  //Declaração de variáveis com useState
  const [inputNome, setNome] = useState('')
  const [inputEmail, setEmail] = useState('')
  const [inputSenha, setSenha] = useState('')

  //Declaração de objeto com useState
  const [user, setUser] = useState({})

  function registrar(e) {//Função que pega todos os dados do formulário faz a validação e imprimi na tela

    e.preventDefault()//Não recarregar a página


    //Validadção primária dos dados informados no formulário
    if (inputNome === "" || inputEmail === "" || inputSenha === "") {//Se os input's noma, email, senha forem iguais a "" (vazio)
      alert('Digite todas as informações')//Mensagem de alerta 
    } else {//Caso contrário
      alert('Informações cadastradas com sucesso !!!')//Alerta de sucesso !

      //seta os valores do objeto 'user' com os valores recebidos do formulário
      setUser({
        nome: inputNome,
        email: inputEmail,
        senha: inputSenha
      })
    }
  }

  return (
    <div>
      <h1>Cadastro de usuário</h1>

      <form onSubmit={registrar}>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          value={inputNome}
          onChange={(e) => setNome(e.target.value)} />
        <br /><br />

        <input
          type="text"
          placeholder="Digite aqui seu e-mail"
          value={inputEmail}
          onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <input
          type="text"
          placeholder="Digite aqui sua senha"
          value={inputSenha}
          onChange={(e) => setSenha(e.target.value)} />
        <br /><br />

        <button
          type="submit">Cadastrar</button>
      </form>
      <br /><br />

      <p>Nome - {user.nome}</p>
      <p>E-mail - {user.email}</p>
      <p>Senha - {user.senha}</p>

    </div>
  )
}

export default App;
