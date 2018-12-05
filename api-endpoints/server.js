import express from 'express';
import router from './src/routes/api-routes';

const app = express();

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running at ${port}.`); });

export default app;
