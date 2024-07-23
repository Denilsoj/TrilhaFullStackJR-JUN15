import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/jwt';

type TokenData = {
  id: string;
  name: string;
  email: string;
};
export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json([{ errors: 'Login required' }]);
    return;
  }

  try {
    const [, token] = authorization.split(' ');
    const { id, name, email } = (await verifyToken(token)) as TokenData;

    req.body.userLoged = { id, name, email };

    return next();
  } catch (e) {
    res.status(401).json({ erros: ['Token inspirado ou inválido'] });
  }
};
