import uuid from 'uuid';

class User {
  // class ctor
  constructor() {
    this.users = [];
  }

  // create a 'new user' method
  create(data) {
    const newUser = {
      id: uuid.v4(),
      firstName: data.firstName,
      lastName: data.lastName,
      otherName: data.otherName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      username: data.username,
      registered: Date.now(),
      isAdmin: false,
    };
    this.users.push(newUser);
    return newUser;
  }

  // findAll (return all objects) method
  findAll() {
    return this.users;
  }

  // findOne (return one object) method
  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  // update method
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].firstName = data.firstName || user.firstName;
    this.users[index].lastName = data.lastName || user.lastName;
    this.users[index].otherName = data.otherName || user.otherName;
    this.users[index].phoneNumber = data.phoneNumber || user.phoneNumber;
    this.users[index].email = data.email || user.email;
    this.users[index].username = data.username || user.username;
    return this.users[index];
  }

  // delete (user) method
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.slice(index, 1);
    return {};
  }
}

export default new User();
