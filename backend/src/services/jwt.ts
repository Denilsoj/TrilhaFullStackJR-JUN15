import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

type Payload = {
  id: string;
  name: string;
  email: string;
};

export default async function token(paylad: Payload): Promise<string> {
  return await jwt.sign(paylad, `${process.env.secrete_key}`, {
    expiresIn: '2 days',
  });
}

export async function verifyToken(token: string) {
  return await jwt.verify(token, `${process.env.secrete_key}`);
}
