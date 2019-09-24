import '@babel/polyfill';
import debug from 'debug';
import express from 'express';
import logger from 'morgan';
import router from './routes';

const app = express();

const { NODE_ENV, PORT } = process.env;
if (NODE_ENV === 'development' || NODE_ENV === 'production') {
  app.use(logger('dev'));
}

const Debug = debug('dev');
const port = PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to iReporter',
  });
});

app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Endpoint doesn\'t exist',
  });
});

app.listen(PORT, () => Debug(`Server running at ${port}.`));

export default app;
