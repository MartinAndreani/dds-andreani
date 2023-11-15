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
          
            {
              lista.map((items,index)=>{
                return(
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.Fecha}</td>
                      <td>{items.Cliente}</td>
                      <td>{(items.ConDescuento)? 'SI':'No'}</td>
                      <td>{items.Total}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPresupuestos;
