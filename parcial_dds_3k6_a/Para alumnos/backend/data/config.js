import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("pedidos", "", "", {
    dialect: "sqlite",
    storage: './data/pedidos.db'
});