import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("presupuestos", "", "", {
    dialect: "sqlite",
    storage: './data/presupuestos.db'
});