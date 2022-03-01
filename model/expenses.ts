import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/index';

const Expense = sequelize.define('Expense', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    spending_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    amount:{
        type: DataTypes.DOUBLE,
        allowNull:false,
    }
  });

  export {Expense};