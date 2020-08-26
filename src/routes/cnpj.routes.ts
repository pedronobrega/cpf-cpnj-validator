import { Router } from 'express';

const routes = Router();

routes.post('/validate');
routes.get('/generate');

export default routes;
