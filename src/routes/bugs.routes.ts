import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateBugService from '../services/CreateBugService';
import DeleteBugService from '../services/DeleteBugService';

import Bug from '../models/Bug';

const bugsRouter = Router();

bugsRouter.get('/', async (request, response) => {
  const bugRepository = getRepository(Bug);

  const bugs = await bugRepository.find();

  return response.json(bugs);
});

bugsRouter.post('/', async (request, response) => {
  const { title, description, reporter, status } = request.body;

  const createBug = new CreateBugService();

  const bug = await createBug.execute({
    title,
    description,
    reporter,
    status,
  });

  return response.json(bug);
});

bugsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteBug = new DeleteBugService();

  await deleteBug.execute(id);

  return response.status(204).send();
});

export default bugsRouter;
