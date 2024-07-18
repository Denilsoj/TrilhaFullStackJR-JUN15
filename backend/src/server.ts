import app from './app';

const port = 3000;

app.on('done', () => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
