import React, { useState, useEffect } from "react";
import "./index.css";
import API from "../../Service/Api";
import Favoritar from "../Favorito/index";
function HomePage() {
  const [list, setlist] = useState([]);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [busca, setBusca] = useState("");
  const [count, setCount] = useState(1);

  const indexList = currentPage * postsPerPage;
  const indexOfFirstPost = indexList - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexList);

  useEffect(() => {
    loadList();
  }, [busca]);
  const params = {};

  if (busca) {
    params.title_like = busca;
  }

  const loadList = async () => {
    const result = await API().get("/photos", {
      params,
    });
    setlist(result.data);
  };

  const listar = (index) => {
    const requestList = [];
    for (var i = index; i < index + 5; i++) {
      const toRequest = API().get(`photos/${i}`);
      requestList.push(toRequest);
    }
    Promise.all(requestList).then((data) => {
      const personaListData = data.map((data) => {
        return data.data;
      });

      console.log(personaListData);
      setlist(personaListData);
    });
  };
  const proximo = () => {
    const countData = count + 5;
    setCount(countData);
    listar(countData);
  };
  const voltar = () => {
    const countData = count - 5;
    setCount(countData);
    listar(countData);
  };

  return (
    <div>
      <input
        type='search'
        className='list-search__input'
        placeholder='Buscar'
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />

      {currentPosts.map((user) => (
        <div key={user.id} className='list-card'>
          <img
            src={user.thumbnailUrl}
            alt={user.title}
            className='list-card__image'
          />
          <div className='list-card__info'>
            <h1 className='list-card__title'>{user.title}</h1>

            <footer className='list-card__footer'>
              <Favoritar></Favoritar>
            </footer>
          </div>
        </div>
      ))}
      <div className='buttons-div'>
        <button onClick={voltar} className='button-infoo'>
          Voltar
        </button>
        <button onClick={proximo} className='button-infoo'>
          Proximo
        </button>
      </div>
    </div>
  );
}

export default HomePage;
