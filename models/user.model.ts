import { DataTypes } from 'sequelize';
import sequelize from '../src/db';
import Micro from './micro.model';
const User = sequelize.define(
  'user',
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    userCorreo: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.belongsToMany(Micro, { through: 'userMicro' });
Micro.belongsToMany(User, { through: 'userMicro' });
export default User;
