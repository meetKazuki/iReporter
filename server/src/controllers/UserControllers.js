import UserModel from '../models/UserModel';

class UserController {
  static registerUser(req, res) {
    const {
      firstname, lastname, othername, email, password, phoneNumber, username,
    } = req.body;
    const userData = {
      firstname,
      lastname,
      othername,
      email,
      password,
      phoneNumber,
      username,
    };

    const newUser = UserModel.create(userData);
    return res.status(201).json({
      status: 201,
      data: [{
        id: newUser.id,
        message: 'Created user successfully',
      }],
    });
  }

  static loginUser(req, res) {
    const user = UserModel.findOne(req.body.email);
    if (!user) {
      return res.status(404).json({
        status: 404,
        error: 'such account does not exist',
      });
    }
    return res.status(200).json({ status: 200, data: [user] });
  }
}

export default UserController;
