import { Request, Response } from 'express';
import UserModel from '../model/UserModel';
import jwt from '../services/jwt';
import { compareHash } from '../services/encrypt';

type UserData = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
};
class TokenController {
  async estore(req: Request, res: Response) {
    const { emailReq, password } = req.body;

    if (!emailReq || !password) {
      return res.status(400).json('Credênciais inválidas');
    }

    const user = (await UserModel.findOne(
      { email: `${emailReq}` },
      'id name email passwordHash',
    )) as UserData;

    if (!user) {
      res.status(401).json([{ errors: 'Usário não encontrado' }]);
    }

    const { id, email, passwordHash } = user;

    if (!(await compareHash(password, passwordHash))) {
      res.status(401).json('senha inválida');
    }

    const token = await jwt({ id, email });

    res.status(200).json({ token });
  }
}

export default new TokenController();
