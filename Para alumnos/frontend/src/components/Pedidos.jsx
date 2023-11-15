import React, {  useState } from 'react';
import ListadoPedidos from './ListadoPedidos';
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Pedidos = () => {
  
  const [lista, setLista] = useState([])
  const {register,handleSubmit}= useForm()

  const onSubmit= async (data)=>{
    const response = axios.get('http://localhost:4000/api/pedidos',{params:data})
    console.log(response.data)
    setLista(response.data)
  }

  
  return (
  <div className="container">
      <h1>Pedidos</h1>
      <hr />
      <div className="card mb-3">
      <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label >Direccion Entrega</label>
            <input type="text" {...register('DireccionEntrega')} />
            <label>Entregado(S y N)</label>
            <input type="text" {...register('Entregado')} />
            <button type="submit">Buscar</button>
          </form>
      </div>
      </div>
      {lista && <ListadoPedidos lista={lista} />}
  </div>
  );
};

export default Pedidos;
