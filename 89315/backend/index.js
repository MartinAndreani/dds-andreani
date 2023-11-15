import express from 'express'
import cors from 'cors'
import { inicializar_db } from './script_presupuestos.js';
import { router } from './routes/presupuestos.js'

const app = express();
app.use(express.json()); 
app.use(cors());
app.use('/api',router)

//inicializar DB:
inicializar_db()

// Inicio del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
