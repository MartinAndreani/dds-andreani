import express from 'express'
import { Pedidos } from '../models/pedidos.js';
import { Op } from 'sequelize';

export const router =express.Router()


router.get('/pedidos', async function(req,res){
    let where ={}
    if(req.query.DireccionEntrega != undefined && req.query.DireccionEntrega !== ''){
        where.DireccionEntrega = {
            [Op.like]: '%' + req.query.DireccionEntrega + "%"
        }
    }
    if (req.query.Entregado != undefined && req.query.Entregado !== ''){
        where.Entregado = req.query.Entregado
    }
    let items = await Pedidos.findAndCountAll({where})
    res.json(items.rows)
})
