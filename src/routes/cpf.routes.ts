import { Router } from 'express';
import CpfController from '../controllers/Cpf.controller';

const routes = Router();

routes.post('/validate', CpfController.validate);
routes.get('/generate');

export default routes;
