import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/Api";
import "./index.css";
const Home = () => {
  const [User, SetUser] = useState([]);
  const [search, SetSearch] = useState("");

  useEffect(() => {
    const params = {};

    if (search) {
      params.nome_produto = search;
    }

    async function getUser() {
      try {
        const response = await Api().get("/produtos", { params });
        SetUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [search]);

  async function DeleteProduct(_id) {
    try {
      await Api().delete(`/delete/produtos/${_id}`);

      SetUser(User.filter((User) => User._id !== _id));
    } catch (err) {
      alert("Erro ao deletar Produto , Tente denovo");
    }
  }

  return (
    <div>
      <header className='list-search__inputt'>
        <h1>Lista de Pokemons</h1>
        <Link className='user-card__li' to='/cadastrar'>
          Cadastrar
        </Link>
      </header>

      <input
        type='search'
        className='list-search__input'
        placeholder='Buscar'
        value={search}
        onChange={(ev) => SetSearch(ev.target.value)}
      />

      {User.map((user) => (
        <div key={user._id} className='list-card'>
          <img
            src={user.img_produto}
            alt={user.title}
            className='list-card__image'
          />
          <div className='list-card__info'>
            <h1 className='list-card__title'>{user.nome_produto}</h1>

            <footer className='user-card__footer'>
              <Link className='user-card__link' to={`/produto/${user._id}`}>
                Detalhes
              </Link>

              <Link className='user-card__linkk' to={`/users/edit/${user._id}`}>
                Editar
              </Link>

              <Link
                className='user-card__linkk'
                to='/'
                onClick={() => DeleteProduct(user._id)}
              >
                Deletar
              </Link>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
