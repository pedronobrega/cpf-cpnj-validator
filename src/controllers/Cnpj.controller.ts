import { Request, Response } from 'express';
import Cnpj from '../services/Cnpj';

export default {
  validate(req: Request, res: Response): void {
    try {
      const { cnpj } = req.body;
      const isValid = Cnpj.isValid(cnpj);
      res.json(isValid);
    } catch (err) {
      res.status(400);
    }
  },
};
