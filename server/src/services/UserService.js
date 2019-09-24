/* eslint-disable no-useless-catch */
import database from '../database/models';

const { User } = database;

export default class UserService {
  static async addUser(newUser) {
    try {
      return await User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(queryString, column = 'email') {
    try {
      const user = await User.findOne({
        where: { [column]: queryString },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
