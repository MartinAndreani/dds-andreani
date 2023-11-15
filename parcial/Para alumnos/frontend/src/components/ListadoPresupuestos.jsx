import React from 'react';

const ListadoPresupuestos = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <h4>Presupuestos</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>PresupuestoNro</th>
            <th>Fecha </th>
            <th>Cliente</th>
            <th>Con Descuento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {/*completar*/}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPresupuestos;
