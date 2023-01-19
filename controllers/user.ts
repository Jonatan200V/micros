import { Request, Response } from 'express';
import User from '../models/user.model';
import { USER } from '../types/types';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (error) {
    return res.json({ message: error });
  }
};
export const createMicro = async (req: Request, res: Response) => {
  try {
    const { userName, userCorreo, userPassword }: USER = req.body;
    const micro = await User.create({
      userName,
      userCorreo,
      userPassword,
    });
    res.json({ micro });
  } catch (error) {
    return res.json({ message: error });
  }
};
