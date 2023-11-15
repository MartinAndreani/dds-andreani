import React from "react";

const ListadoDeudores = ({ lista }) => {

    return (
        <div className="containter mt-3"> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>MontoAdeudado</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item) => (
                        <tr key={item.IdDeudor}>
                            <td>{item.IdDeudor}</td>
                            <td>{item.DeudorDescripcion}</td>
                            <td>{item.MontoAdeudado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListadoDeudores;