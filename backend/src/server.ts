import app from './app';

const port = 3333;

app.on('done', () => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
