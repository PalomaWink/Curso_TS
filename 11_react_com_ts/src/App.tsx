import './App.css'
import SecondComponent from './components/SecondComponent'
import Destructuring from './components/Destructuring'
import State from './components/State'

function App() {
  //1 - variaveis
  const name: string = 'Paloma'
  const isWorking: boolean = true

  //2 - funcoes
  const userGreeting = (name: string) => {
    return `Olá ${name}`
  }

  return (
    <div>
      <h1>Trabalhando com TS</h1>
      <h2>Olá {name}</h2>
      {
        isWorking && <p>Estou trabalhando!</p>
      }
      <h3>{userGreeting(name)}</h3>
      <SecondComponent name={name} age={28} />
      <Destructuring 
        commentQtd={10}
        content='Algum conteudo' 
        tags={["TS", "JS", "Python", "C#"]}
        title='Meu blog tec'
      />
      <State />
    </div>
  )
}

export default App
