import { Router } from 'express';

import bugsRouter from './bugs.routes';

const routes = Router();

routes.use('/bugs', bugsRouter);

export default routes;
