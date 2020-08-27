import { Request, Response } from 'express';
import Cpf from '../services/Cpf';

export default {
  validate(req: Request, res: Response): void {
    try {
      const { cpf } = req.body;
      const isValid = Cpf.isValid(cpf);
      res.json(isValid);
    } catch (err) {
      res.status(400);
    }
  },
};
