import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/userRoutes';
import tokenRouter from './routes/tokenRoute';
import projectRouter from './routes/projectRoutes';

dotenv.config();

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.connection();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/users/', userRouter);
    this.app.use('/token/', tokenRouter);
    this.app.use('/project/', projectRouter);
  }
  private async connection(): Promise<void> {
    await mongoose.connect(`${process.env.database_url}`);
    console.log('conect database');
    this.app.emit('done');
  }
}

export default new App().app;
