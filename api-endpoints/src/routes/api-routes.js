import express from 'express';
import Incident from '../controllers/Incident';

const router = express.Router();

router.use(express.json());

/**
 * /red-flag endpoints
 */
// create a red-flag record
router.get('/api/v1/red-flags', Incident.getAll);

export default router;
