import  { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import RepoController from './app/controllers/RepoController';

routes.get('/users', UserController.index);
routes.get('/users/:username/details', UserController.show);

routes.get('/users/:username/repos', RepoController.index);

export default routes;
