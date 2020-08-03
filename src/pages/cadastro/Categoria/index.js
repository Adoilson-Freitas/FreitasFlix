import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Main, Button, Loading } from './styles';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#ff0000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_DB = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categorias'
      : `${config.URL_BACKEND}categorias`;

    fetch(URL_DB).then(async (serverDados) => {
      const dados = await serverDados.json();
      setCategorias([...dados]);
    });
  }, []);

  return (
    <PageDefault>
      <Main>
        <h1>Cadastro de Canal de inglês: {values.titulo}</h1>

        <form
          onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([...categorias, values]);

            clearForm();
          }}
        >
          <FormField
            label="Nome da canal"
            type="text"
            name="titulo"
            value={values.titulo}
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
          <Link to="/">Home</Link>
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
