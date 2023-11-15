// configurar ORM sequelize
import { DataTypes } from "sequelize"
import { sequelize } from "../data/config.js";

export const Presupuestos = sequelize.define(
  "Presupuestos",
  {
    PresupuestoNro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ConDescuento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    FechaBaja: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "presupuestos",
    timestamps: false,
}
);