import express from 'express';
import Incident from './src/controllers/Incident';

const app = express();

app.use(express.json());

// welcome
app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'Enpoints locked. Welcome!' });
});

/**
 * red-flag endpoints
 */
// get all red-flags
app.get('/api/v1/records', Incident.getAll);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running at ${port}.`); });
