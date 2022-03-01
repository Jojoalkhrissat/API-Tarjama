import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/index';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_login:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    }
  });

  export {User};