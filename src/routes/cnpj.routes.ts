import { Router } from 'express';
import CnpjController from '../controllers/Cnpj.controller';

const routes = Router();

routes.post('/validate', CnpjController.validate);

export default routes;
