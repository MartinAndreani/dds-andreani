import { useForm } from 'react-hook-form';
import ListadoPresupuestos from './ListadoPresupuestos';
import axios from 'axios';
import  { useState } from 'react';






const Presupuestos = () => {
  
  const { register, handleSubmit} = useForm()
  const [ lista, setLista ] = useState([])


  const onSubmit = async(data)=>{
    try {
      const response = await axios.get('http://localhost:4000/api/presupuestos',{
        params:data
        
      })
      console.log(response.data);
      setLista(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <div className="container">
      <h3>Criterios de Búsqueda</h3>
      <div className="card mb-3">
        <div className="card-body">
           <form onSubmit={handleSubmit(onSubmit)}>
            
                <h3>Cliente</h3>
                <input type="text" {...register('Cliente')}/>
                <label>Ingrese S o N</label>
                <input type="text" {...register('ConDescuento')}/>
            
            <button type='submit' className='btn btn-primary'>Boton</button>
              
           </form>
        </div>
      </div>
      {lista && <ListadoPresupuestos lista={lista} />}
    </div>
  );
};

export default Presupuestos;
