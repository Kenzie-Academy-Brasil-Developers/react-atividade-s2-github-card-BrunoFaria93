import "./App.css";
import Pages from "./Pages"
import { useState } from 'react'

function App() {
  const [lista, setLista] = useState([])

  return <Pages lista={lista} setLista={setLista} />
}

export default App
