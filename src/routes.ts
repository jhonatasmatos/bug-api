import express from 'express';

import BugsController from './controllers/BugsController';

const routes = express.Router();

const bugsController = new BugsController();

routes.get('/bugs', bugsController.index);
routes.post('/bugs', bugsController.create);

export default routes;