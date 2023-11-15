// configurar ORM sequelize
import { DataTypes } from "sequelize"
import { sequelize } from "../data/config.js";

export const Pedidos = sequelize.define(
  "Pedidos",
  {
    Codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FechaEntrega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DireccionEntrega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Entregado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "pedidos",
    timestamps: false,
}
);