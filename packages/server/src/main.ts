import express from 'express';
// import cors from 'cors';

const app = express();

// app.use(
//   cors({
//     origin: '*',
//     // Allow follow-up middleware to override this CORS for options
//     preflightContinue: true,
//   })
// );

app.use((req, res, next) => {
  console.log('REQUEST:', req);

  next();
});

app.use('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
