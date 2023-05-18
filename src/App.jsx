import { useState } from 'react'
import './App.css'

function App() {
  let [livros, setLivros] = useState([]);
  let[livro, setLivro] = useState({});

  function addLivro(){
    console.log(livro);
    livros.push(livro);
    setLivros([...livros]);
    setLivro({});
    console.log(livro);
  }
  return (
    <div>
   <input 
    value={livro.nome}
    onChange={(e)=>{ livro.nome = e.target.value;
      setLivro(livro)}}

   />
   <button onClick={addLivro}>Salvar</button>
   </div>
  )
}

export default App
