import { Request, Response } from 'express';
import Cpf from '../services/Cpf';

export default {
  validate(req: Request, res: Response): Response {
    const { cpf } = req.body;
    return res.json(Cpf.isValid(cpf));
  },
};
