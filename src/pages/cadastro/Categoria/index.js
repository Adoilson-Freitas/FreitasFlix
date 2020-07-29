import React, { useState } from 'react';
import { Main, Button } from './styles';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
     <Main>
     <h1>Cadastro de Categoria: {values.nome}</h1>

<form onSubmit={function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresIniciais)
}}>

  <div className="label-float">
    <input 
      name="nome"
      value={values.nome}
      onChange={handleChange} 
     type="text"
     placeholder=" "
     required
  />  
<label>Nome da Categoria</label>
</div>

<div className="label-float">
 <textarea 
    name="descricao"
    value={values.descricao}
    onChange={handleChange}  
    type="text"
    placeholder=" "
    />
   <label>Descrição</label>
</div>

  <input
    className="cor"
    type="color"
    name="cor"
    value={values.cor}
    onChange={handleChange}
  />
 

  <Button>
    <button>Cadastrar</button>
  </Button>
</form>


<table>
<tbody >
    <tr>
       <th>Nome</th>
       <th>Descrição</th>
       <th>Cor</th>
       <th>Excluir</th>
    </tr>
  {categorias.map((categoria, indice) => {
    return (

     <tr key={`${categoria}${indice}`}>
       <td>{categoria.nome}</td>
      <td>{categoria.descricao}</td>
      <td>{categoria.cor}</td>
      <td>Excluir</td>
     </tr>
    )

  })}
  </tbody>
</table>


     </Main>
    </PageDefault>
  )
}