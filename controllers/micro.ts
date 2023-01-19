import { Request, Response } from 'express';
import Micro from '../models/micro.model';
import { MICRO } from '../types/types';
import dataMicros from '../data';

export const getMicros = async (_req: Request, res: Response) => {
  try {
    const micros = await Micro.findAll();
    if (micros.length === 0) {
      dataMicros.forEach(async (micro) => {
        await Micro.create({
          microPass: micro.microPass,
          microLine: micro.microLine,
          microDay: micro.microDay,
        });
      });
    }
    res.json({ micros });
  } catch (error) {
    return res.json({ message: error });
  }
};
export const createMicro = async (req: Request, res: Response) => {
  try {
    const { microPass, microLine, microDay }: MICRO = req.body;
    const micro = await Micro.create({
      microPass,
      microLine,
    });
    res.json({ micro });
  } catch (error) {
    return res.json({ message: error });
  }
};
