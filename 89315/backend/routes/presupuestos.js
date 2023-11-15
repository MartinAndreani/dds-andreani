import express from 'express'
import { Presupuestos } from '../models/presupuestos.js';
import { Op } from 'sequelize';

export const router = express.Router()

router.get('/presupuestos',async(req,res)=>{
    let where ={}

    if(req.query.FechaBaja != null  && req.query.FechaBaja !== ""){
        where.FechaBaja ={
            [Op.like] : "%" + req.query.FechaBaja + "%"
        }
    }
    if(req.query.Cliente != undefined && req.query.Cliente !== ""){
        where.Cliente= {
            [Op.like] : "%" + req.query.Cliente + "%" 
        }
    }
    if(req.query.ConDescuento === 'true'){
        where.ConDescuento = req.query.ConDescuento
    }

    let presupuesto= await Presupuestos.findAndCountAll({where})
    res.json(presupuesto.rows)

})
