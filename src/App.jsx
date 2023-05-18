import { useState } from 'react'
import './App.css'

function App() {
  let [livros, setLivros] = useState([]);
  let[livro, setLivro] = useState({});

  function addLivro(){
    livros.push(livro);
    setLivros([...livros]);
    limparForm();
  }
  function limparForm(){
    setLivro({
      codigo:'',
      nome:'',
      autor:'',
    });
  }

  function removerLivro(livro){
    console.log(livro);
    livros.splice(livros.indexOf(livro), 1);
    setLivros([...livros]);
  }

  return (
    <div>
   <input 
   placeholder='Código'
    value={livro.codigo}
    onChange={(e)=>{ livro.codigo = e.target.value
      setLivro({...livro})}}
   />
   <input 
    placeholder='Nome Livro'
    value={livro.nome}
    onChange={(e)=>{ livro.nome = e.target.value
      setLivro({...livro})}}
   />
   <input 
    placeholder='Autor'
    value={livro.autor}
    onChange={(e)=>{ livro.autor = e.target.value
      setLivro({...livro})}}
   />
   <button onClick={addLivro}>Salvar</button>
   <div className='livros'>
   <table>
   <tr>
      <th >Código</th>
        <th >Nome</th>
        <th >Autor</th>
    </tr>
    {livros.map(x=>{
      return       <tr>
        <th >{x.codigo}</th>
        <th >{x.nome}</th>
        <th >{x.autor}</th>
        <th ><button onClick={()=>{removerLivro(x)}} >Remover</button></th>
        
      </tr>
    })}
   </table>
   </div>
   </div>
  )
}

export default App
