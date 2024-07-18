import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type Payload = {
  id: string;
  email: string;
};

export default async function token(paylad: Payload): Promise<string> {
  return await jwt.sign(paylad, `${process.env.secrete_key}`, {
    expiresIn: '2 days',
  });
}
