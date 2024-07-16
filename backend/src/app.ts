import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middleware();
    this.connection();
  }

  middleware(): void {
    this.app.use(express.json());
  }

  routes(): void {}
  async connection(): Promise<void> {
    await mongoose.connect(`${process.env.database_url}`);
    console.log('conect database');
    this.app.emit('done');
  }
}

export default new App().app;
