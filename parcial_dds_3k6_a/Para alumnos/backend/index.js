import express from 'express'
import cors from 'cors'
import { router } from './routes/pedidos.js'


const app = express ()

app.use(express.json())
app.use(cors())
app.use('/api',router)
app.listen(4000,()=>{
    console.log('escuchando en el puerto 4000')
})