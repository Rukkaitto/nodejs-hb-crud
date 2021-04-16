let users = [{
  id: 1,
  firstName: 'Lucien',
  lastName: 'LAGARDE'
}, {
  id: 2,
  firstName: 'Julie',
  lastName: 'TALBOT'
}, {
  id: 3,
  firstName: 'Hervé',
  lastName: 'DUGRAND'
}];

let nextId = users.length;

module.exports = class {

  getAll() {
    return users;
  }

  getOne(id) {
    return users.find((user) => user.id === id);
  }

  create({ firstName, lastName }) {
    const user = {
      firstName,
      lastName,
      id: nextId++
    };
    users.push(user);
    return user;
  }

  update() {

  }

  delete(id) {
    const newUsers = users.filter((user) => user.id !== id);
    if (newUsers.length === users.length - 1) {
      users = newUsers;
      return true;
    }
    return false;
  }
};
