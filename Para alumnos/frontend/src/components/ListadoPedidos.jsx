import React from 'react';

const ListadoPedidos = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <h4>Pedidos</h4>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Codigo</th>
          <th>FechaEntrega</th>
          <th>DireccionEntrega</th>
          <th>Cliente</th>
          <th>Entregado</th>
         </tr>
        </thead>
         <tbody>
          {lista.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Codigo}</td>
                <td>{item.FechaEntrega}</td>
                <td>{item.DireccionEntrega}</td>
                <td>{item.Cliente}</td>
                <td>{(item.Entregado)? 'True':'False'}</td>
              </tr>
            )
          })}
         </tbody>
        
      </table>
    </div>
  );
};

export default ListadoPedidos;
