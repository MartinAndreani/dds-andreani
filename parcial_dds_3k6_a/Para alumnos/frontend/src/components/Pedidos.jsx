import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ListadoPedidos from './ListadoPedidos';

const Pedidos = () => {
  const {register,handleSubmit}= useForm()
  const [lista,setLista]= useState([])

  const onSubmit = async (data)=>{
    try {
      const response = await axios.get('http://localhost:4000/api/pedidos', {
        params: data
      })
      console.log(response.data)
      setLista(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <h3>Formulario de Búsqueda</h3>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className='mb-3'>
              <label >Direccion Entrega</label>
              <input type="text" {...register('DireccionEntrega')} />
              <input type="text" {...register('Entregado')}/>
            </div>
            <button type='submit'>Buscar</button>
          </form>
          
        </div>
      </div>
      {lista && <ListadoPedidos lista={lista} />}
    </div>
  );
};

export default Pedidos;
