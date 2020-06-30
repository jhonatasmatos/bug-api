import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

const bugsRouter = Router();

bugsRouter.get('/', async (request, response) => {
  // TODO
});

bugsRouter.post('/', async (request, response) => {
  // TODO
});

bugsRouter.delete('/:id', async (request, response) => {
  // TODO
});

export default bugsRouter;
