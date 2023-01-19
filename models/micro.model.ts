import { DataTypes } from 'sequelize';
import sequelize from '../src/db';

const Micro = sequelize.define(
  'micros',
  {
    microsId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    microPass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microLine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Micro;
