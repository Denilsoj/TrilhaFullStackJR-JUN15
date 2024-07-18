import { Request, Response } from 'express';
import encrypt from '../services/encrypt';
import UserModel from '../model/UserModel';

class UserController {
  async estore(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const newUser = await UserModel.create({
        name,
        email,
        passwordHash: await encrypt(password),
      });

      res.json(newUser);
    } catch (e) {
      res.json(e);
    }
  }
}

export default new UserController();
