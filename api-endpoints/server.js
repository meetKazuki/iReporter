import express from 'express';
import User from './src/controllers/User';
import Incident from './src/controllers/Incident';

const app = express();

app.use(express.json());

/**
 * /User endpoints
 */
// create a new user
app.post('/api/v1/users', User.create);
// get all users
app.get('/api/v1/users', User.getAll);
// get a particular user
app.get('/api/v1/users/:userId', User.getOne);
// update a particular user
app.patch('/api/v1/users/:userId', User.update);
// delete a particular user
app.delete('/api/v1/users/:userId', User.delete);

/**
 * /red-flag endpoints
 */
// create a red-flag record
app.post('/api/v1/red-flags', Incident.create);
// get all red-flags
// app.get('/red-flags', Incident.getAll);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running at ${port}.`); });
