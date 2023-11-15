import express from 'express'
import { Pedidos } from '../models/pedidos.js'
import { Op } from 'sequelize'


export const router = express.Router()

router.get("/pedidos",async function(req,res){
  let where ={}
  if (req.query.DireccionEntrega){
    where.DireccionEntrega={
      [Op.like]: "%" + req.query.DireccionEntrega + "%"
    }
  }
  if (req.query.Entregado){
    if (req.query.Entregado === "S"){
      where.Entregado= true
    }else if (req.query.Entregado === "N"){
      where.Entregado = false
    }
  }
  let pedidos = await Pedidos.findAll({where})
  res.json(pedidos)
})