import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./index.css";
const Page2 = () => {
  const [user, setUser] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get(
          `http://localhost:3333/api/produtos.details/${_id}`
        );
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [_id]);

  return (
    <div>
      <section className='fon'>
        <img className='bla' src={user.img_produto} alt={user._id} />

        <div className='fonn'>
          <h4>Nome : {user.nome_produto}</h4>
          <h4>Descrição : {user.descricao}</h4>
          <h4>Poder : {user.preco_produto}</h4>
          <h4>habilidade : {user.quantidade_produto}</h4>
        </div>
      </section>
    </div>
  );
};
export default Page2;
