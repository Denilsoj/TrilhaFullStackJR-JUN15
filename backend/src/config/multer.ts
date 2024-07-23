import multer from 'multer';
import { Request } from 'express';
import { resolve, extname } from 'path';

type DestinationeNameCallback = (
  error: Error | null,
  destination: string,
) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const aleatory = Math.floor(Math.random() * 10000 + 1000);
export default {
  storage: multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationeNameCallback,
    ): void => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback,
    ): void => {
      cb(null, `${Date.now()}_${aleatory}${extname(file.originalname)}`);
    },
  }),
};
