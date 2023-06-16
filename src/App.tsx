import React, { useState } from 'react'
import './App.css'

const AppNavBar = () =>{
  return(
    <div>
      <h1>Lista de Tarefas</h1>
    </div>
  )
}

const AppEntrada = (props: any) => {
  
  return(
    <div className="card">
      <label>Adicione uma tarefa:</label>
      <input type="texto" value={props.Texto} onChange={props.mudarTexto}/>
    </div>
  )
}

const AppCloneEntrada = (props: any) =>{
  return(
    <label>{props.texto}</label>
  )
}

function App() {

  const [entrada, setEntrada] = useState ("")

  return (
    <>
      <AppNavBar />
      <AppEntrada Texto={entrada} mudarTexto={(e: any) => setEntrada(e.target.value)}/>
      <AppCloneEntrada texto = {entrada}/>
    </>
  )
}

export default App
