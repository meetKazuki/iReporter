import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

class AuthenticateUser {
  static generateToken(req, res, next) {
    jwt.sign(req.body, secretKey, { expiresIn: '5 minutes' }, (err, token) => {
      if (err) {
        return res.status(500).json({
          status: 500,
          error: 'Unable to authenticate accounnt at this time',
        });
      }
      req.token = token;
      return next();
    });
  }

  static verifyToken(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).json({
        status: 401,
        error: 'Token must be provided',
      });
    }

    const token = req.headers.authorization.split(' ')[1];
    return jwt.verify(token, secretKey, (err) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          error: 'Token cannot be authenticated',
        });
      }
      return next();
    });
  }
}

export default AuthenticateUser;
