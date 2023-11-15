import React, {  useState } from 'react';
import ListadoPresupuestos from './ListadoPresupuestos';
const Presupuestos = () => {
  const [lista, setLista] = useState([])

  return (
    <div className="container">
      <h3>Criterios de Búsqueda</h3>
      <div className="card mb-3">
        <div className="card-body">
           {/*completar*/}
        </div>
      </div>
      {lista && <ListadoPresupuestos lista={lista} />}
    </div>
  );
};

export default Presupuestos;
