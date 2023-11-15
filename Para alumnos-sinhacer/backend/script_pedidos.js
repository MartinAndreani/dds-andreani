import { sequelize } from './data/config.js';
import { Pedidos } from './models/pedidos.js'

export async function inicializar_db() {
    await sequelize.sync({force: true}).then(() => {
    console.log('Base de datos sincronizada!')
  });

  Pedidos.bulkCreate([
    {
      FechaEntrega: '2023-22-04',
      DireccionEntrega: 'Sobremonte 896',
      Cliente: 1,
      Entregado: true
    },
    {
      FechaEntrega: '2023-19-04',
      DireccionEntrega: 'Julio A. Roca 096',
      Cliente: 1,
      Entregado: true
    },
    {
      FechaEntrega: '2023-22-04',
      DireccionEntrega: 'Sobremonte 896',
      Cliente: 10,
      Entregado: true
    },
    {
      FechaEntrega: '2023-22-06',
      DireccionEntrega: 'Santa Fe 1896',
      Cliente: 11,
      Entregado: false
    },
    {
      FechaEntrega: '2023-01-06',
      DireccionEntrega: 'Marconi y Sobremonte',
      Cliente: 1,
      Entregado: true
    },
    {
      FechaEntrega: '2023-22-07',
      DireccionEntrega: 'San Martín 1988',
      Cliente: 1,
      Entregado: false
    },
    
   
  ])
}


