/* eslint-disable no-param-reassign */
import { hashPassword } from '../../helpers/auth';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    username: DataTypes.STRING,
    registered: DataTypes.DATE,
    isAdmin: DataTypes.BOOLEAN,
  }, {});

  User.beforeCreate(async (user) => {
    user.password = await hashPassword(user.password);
  });

  User.beforeUpdate(async (user) => {
    user.password = await hashPassword(user.password);
  });

  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
