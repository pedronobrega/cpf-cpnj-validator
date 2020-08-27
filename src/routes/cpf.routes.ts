import { Router } from 'express';
import CpfController from '../controllers/Cpf.controller';

const routes = Router();

routes.post('/validate', CpfController.validate);

export default routes;
