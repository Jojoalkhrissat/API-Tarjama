import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/index';

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });

  export {Category};