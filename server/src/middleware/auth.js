import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import Response from '../helpers/response';
import UserService from '../services/UserService';

config();
const response = new Response();
const { TOKEN_SECRET } = process.env;

export default {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;
    try {
      if (!token) {
        response.setError(401, 'Unauthorized. Provide a token to continue');
        return response.send(res);
      }
      const payload = jwt.verify(token, TOKEN_SECRET);
      req.user = payload;
      return next();
    } catch (error) {
      response.setError(401, 'Unauthorized. Token is invalid or expired');
      return response.send(res);
    }
  },

  checkExistingUser: async (req, res, next) => {
    const { email, username } = req.body;
    const existingUser = await UserService.getAUser(email);
    const existingUsername = await UserService.getAUser(username, 'username');

    if (existingUser) {
      response.setError(409, 'User already exist');
      return response.send(res);
    }
    if (existingUsername) {
      response.setError(409, 'Username already in use');
      return response.send(res);
    }

    return next();
  },
};
