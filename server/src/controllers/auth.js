import UserService from '../services/UserService';
import Response from '../helpers/response';
import { generateToken, verifyPassword } from '../helpers/auth';

const response = new Response();

class UserController {
  static async signup(req, res) {
    const newUser = await UserService.addUser(req.body);
    const { password, ...user } = newUser.dataValues;
    const token = generateToken({ newUser });
    response.setSuccess(
      201,
      'Signup successful!',
      {
        token, user,
      },
    );
    return response.send(res);
  }

  static async signin(req, res) {
    const { email, password } = req.body;
    const user = await UserService.getAUser(email);
    if (!user) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }
    const isPassword = verifyPassword(password, user.password);
    if (!isPassword) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }

    delete user.dataValues.password;
    const token = generateToken({ user });
    response.setSuccess(200, 'Signin successful!', { token, user });
    return response.send(res);
  }
}

export default UserController;
