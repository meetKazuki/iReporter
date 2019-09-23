import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  create(data) {
    const newUser = {
      id: uuid.v4(),
      firstname: data.firstname,
      othernames: data.othernames,
      email: data.email,
      phoneNumber: data.phoneNumber,
      username: data.username,
      registered: Date.now(),
      isAdmin: false,
    };
    this.users.push(newUser);
    return newUser;
  }

  findOne(email) {
    return this.users.find(user => user.email === email);
  }
}

export default new User();
