import express from 'express';
import ValidateIncident from '../middleware/ValidateIncident';
import AuthenticateUser from '../middleware/AuthenticateUser';
import UserController from '../controllers/UserControllers';
import IncidentController from '../controllers/IncidentControllers';

const router = express.Router();

/**
 * API v1 endpoints
 */

/**
 * Handle all GET requests
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to iReporter API v1' });
});
router.get(
  '/red-flags',
  AuthenticateUser.generateToken,
  IncidentController.getAllIncidents,
);
router.get(
  '/red-flags/:id',
  AuthenticateUser.generateToken,
  ValidateIncident.validateGetRequest,
  IncidentController.getOneIncident,
);

/**
 * Handle all POST requests
 */
router.post(
  '/red-flags',
  ValidateIncident.validatePostRequest,
  AuthenticateUser.verifyToken,
  IncidentController.createIncident,
);
router.post(
  '/auth/register',
  AuthenticateUser.generateToken,
  UserController.registerUser,
);
router.post(
  '/auth/login',
  AuthenticateUser.generateToken,
  UserController.loginUser,
);

/**
 * Handle all PATCH requests
 */
router.patch(
  '/red-flags/:id/location',
  AuthenticateUser.generateToken,
  ValidateIncident.valdiateLocation,
  IncidentController.updateLocation,
);
router.patch(
  '/red-flags/:id/comment',
  AuthenticateUser.generateToken,
  ValidateIncident.validateComment,
  IncidentController.updateComment,
);

/**
 * Handle all DELETE requests
 */
router.delete(
  '/red-flags/:id',
  AuthenticateUser.generateToken,
  ValidateIncident.validateDeleteRequest,
  IncidentController.deleteIncident,
);

/**
 * API v2 Endpoints
 */

export default router;
