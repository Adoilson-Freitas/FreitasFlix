import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Main, Button, Loading } from './styles';

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
      const URL = 'https://english-flix.herokuapp.com/categorias';
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
        <h1>Cadastro de Canal de inglês: {values.nome}</h1>

        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();

            setCategorias([...categorias, values]);

            setValues(valoresIniciais);
          }}
        >
          <FormField
            label="Nome da canal"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
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

        {categorias.length === 0 && (
          <Loading>
            <div className="text">Loading...</div>
            <div className="ring" />
          </Loading>
        )}
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
            {categorias.map((categoria) => {
              return (
                <tr key={categoria.id}>
                  <td
                    className="titulo"
                    style={{
                      backgroundColor: `${categoria.cor}`,
                    }}
                  >
                    {categoria.titulo}
                  </td>
                  <td>{categoria.descricao}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Main>
    </PageDefault>
  );
}
