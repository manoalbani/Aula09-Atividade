import { useState } from 'react'
import './App.css'

function App() {
  let [livros, setLivros] = useState([]);
  let[nomeLivro, setNomeLivro] = useState('');
  let[codigoLivro, setCodigoLivro] = useState('');
  let[autorLivro, setAutorLivro] = useState('');

  function addLivro(){
    let livro = {
      codigo: codigoLivro,
      nome:nomeLivro,
      autor: autorLivro,
    }
    livros.push(livro);
    setLivros([...livros]);
    limparForm();
  }
  function limparForm(){
    setNomeLivro('');
    setCodigoLivro('');
    setAutorLivro('');
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
    value={codigoLivro}
    onChange={(e)=>{ setCodigoLivro(e.target.value)}}
   />
   <input 
    placeholder='Nome Livro'
    value={nomeLivro}
    onChange={(e)=>{ setNomeLivro(e.target.value)}}
   />
   <input 
    placeholder='Autor'
    value={autorLivro}
    onChange={(e)=>{ setAutorLivro(e.target.value)}}
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
