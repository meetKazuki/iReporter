import UserModel from '../models/User';

const User = {
  // create a POST request
  create(req, res) {
    if (!req.body.firstName
      && !req.body.lastName
      && !req.body.otherName
      && !req.body.email
      && !req.body.phoneNumber
      && !req.body.username) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }
    const user = UserModel.create(req.body);
    return res.status(201).json({
      status: 201,
      message: 'Created new User',
      data: user,
    });
  },

  // create a GET/All request
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).json({ status: 200, users });
  },

  // create a GET/_id request
  getOne(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'User not found',
      });
    }
    return res.status(200).json({ status: 200, user });
  },

  // create a PATCH request
  update(req, res) {
    const user = UserModel.findOne(req.param.id);
    if (!user) {
      return res.status(404).json({
        status: 200,
        message: 'User not found',
      });
    }
    const updateUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updateUser);
  },

  // create a DELETE request
  delete(req, res) {
    const user = UserModel.findOne(req.param.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const delUser = UserModel.update(req.params.id);
    return res.status(204).send(delUser);
  },
};

export default User;
