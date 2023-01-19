import { Router } from 'express';
import { createMicro, getMicros } from '../controllers/micro';

const microRouter = Router();

microRouter.get('/', getMicros);
microRouter.post('/', createMicro);

export default microRouter;
