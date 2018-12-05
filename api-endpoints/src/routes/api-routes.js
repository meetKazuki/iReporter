import express from 'express';
import Incident from '../controllers/Incident';

const router = express.Router();

router.use(express.json());

/**
 * /red-flag endpoints
 */
// get all red-flag records
router.get('/api/v1/red-flags', Incident.getAll);
// get a specific red-flag record
router.get('/api/v1/red-flags/:id', Incident.getOne);
// create a red-flag record
router.post('/api/v1/red-flags', Incident.create);
// delete a red-flag record
router.delete('/api/v1/red-flags/:id', Incident.delete);

export default router;
