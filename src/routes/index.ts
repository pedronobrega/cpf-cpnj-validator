import { Router } from 'express';
import cpfRouter from './cpf.routes';
import cnpjRouter from './cnpj.routes';

const routes = Router();

routes.use('/cpf', cpfRouter);
routes.use('/cnpj', cnpjRouter);

export default routes;
