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
}

export default UserController;
