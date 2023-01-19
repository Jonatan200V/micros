import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize(
  'postgres://postgres:43486277@localhost:5432/micro',
  {
    logging: false,
  }
);

export default sequelize;
