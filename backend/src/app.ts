import express, { Express } from 'express';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middleware();
  }

  middleware(): void {
    this.app.use(express.json());
  }

  routes(): void {}
}

export default new App().app;
