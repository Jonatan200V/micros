import express from 'express';
import sequelize from './db';
import Micro from '../models/micro.model';
import User from '../models/user.model';
import microRouter from '../routes/micro';
import userRouter from '../routes/user';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/micros', microRouter);
app.use('/api/user', userRouter);
async function Main() {
  try {
    app.listen(3000);

    sequelize.sync({ force: true });

    console.log('Server is running on Port ' + 3000);
  } catch (error) {
    console.log(error);
  }
}

Main();
