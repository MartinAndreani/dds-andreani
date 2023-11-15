import { sequelize } from './data/config.js';
import { Presupuestos } from './models/presupuestos.js';

export async function inicializar_db() {
    await sequelize.sync({force: true}).then(() => {
    console.log('Base de datos sincronizada!')
  });

  Presupuestos.bulkCreate([
    {
      Fecha: '2023-22-04',
      Cliente: 'INRA SRL',
      Total: 10000,
      ConDescuento: true, 
      FechaBaja: null
    },
    {
      Fecha: '2023-11-05',
      Cliente: 'Zuppa Hnos',
      Total: 55000,
      ConDescuento: false, 
      FechaBaja: '2023-13-05'
    },
    {
      Fecha: '2023-10-06',
      Cliente: 'Ferreteria Zanne',
      Total: 115600,
      ConDescuento: true, 
      FechaBaja: null
    },
    {
      Fecha: '2023-10-06',
      Cliente: 'Gomeria San Pedro',
      Total: 69300,
      ConDescuento: true, 
      FechaBaja: null
    },
    {
      Fecha: '2023-13-03',
      Cliente: 'Juan Acme SRL',
      Total: 96500,
      ConDescuento: true, 
      FechaBaja: '2023-20-03'
    },
    {
      Fecha: '2023-09-01',
      Cliente: 'Mercado del NORTE',
      Total: 118970,
      ConDescuento: false, 
      FechaBaja: null,
    },
       
  ])
}

