import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({
    message: 'My server Express, Typescript e ESLint!',
  }),
);

app.listen(3333, () => {
  console.log('Server is running on PORT 3333');
});
