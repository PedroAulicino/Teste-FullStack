import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@rocketseat/unform";
import { useHistory, useParams } from "react-router-dom";
import "./edit.css";
const EditUser = () => {
  let history = useHistory();
  const { _id } = useParams();
  const [user, setUser] = useState({});

  const {
    nome_produto,
    descricao,
    preco_produto,
    quantidade_produto,
    img_produto,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:3333/api/produtos/${_id}`
      );
      setUser(result.data);
    };
    loadUser();
  }, [_id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3333/api/produtos/${_id}`, user);
    history.push("/");
  };

  return (
    <div className='form-wrapper'>
      <h1>Editar Pokemon</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='input-text'>
          <label htmlFor='label2'>Nome </label>
          <Input
            type='text'
            className='form-control form-control-lg'
            name='nome_produto'
            value={nome_produto}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='input-text'>
          <label htmlFor='label2'>Descrição</label>
          <Input
            type='text'
            className='form-control form-control-lg'
            name='descricao'
            value={descricao}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='input-text'>
          <label htmlFor='label2'>Poder</label>
          <Input
            type='text'
            className='form-control form-control-lg'
            name='preco_produto'
            value={preco_produto}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='input-text'>
          <label htmlFor='label2'>habilidade</label>
          <Input
            type='text'
            className='form-control form-control-lg'
            name='quantidade_produto'
            value={quantidade_produto}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='input-text'>
          <label htmlFor='label2'>Imagem </label>
          <Input
            type='text'
            className='form-control form-control-lg'
            name='img_produto'
            value={img_produto}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button className='btn btn-warning btn-block'>Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
