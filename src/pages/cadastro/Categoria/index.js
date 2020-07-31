import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Main, Button } from './styles';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ff0000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3333/categorias';
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const resposta = await response.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <PageDefault>
      <Main>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();

            setCategorias([...categorias, values]);

            setValues(valoresIniciais);
          }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <input
            label="Cor"
            type="color"
            name="cor"
            className="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            {' '}
            <button type="submit">Cadastrar</button>
          </Button>
        </form>
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Cor</th>
              <th>Excluir</th>
            </tr>
            {categorias.map((categoria) => {
              return (
                <tr key={categoria.id}>
                  <td>{categoria.titulo}</td>
                  <td>{categoria.descricao}</td>
                  <td>{categoria.cor}</td>
                  <td>Excluir</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Main>
    </PageDefault>
  );
}
