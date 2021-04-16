const User = require("../models/users.model");

module.exports = class {
  getAll() {
    return new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        err ? reject(err) : resolve(users.map((user) => user.toObject()));
      });
    });
  }

  getWithLastName(lastName) {
    const regex = new RegExp(lastName, "i");

    return new Promise((resolve, reject) => {
      User.find({lastName: {$regex: regex}}, (err, users) => {
        err ? reject(err) : resolve(users.map((user) => user.toObject()));
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  create({ firstName, lastName }) {
    return new Promise((resolve, reject) => {
      User.create({ firstName, lastName }, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  update(id, { firstName, lastName }) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(id, { firstName, lastName }, (err, user) => {
        err ? reject(err) : resolve(user.toObject());
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      User.findByIdAndDelete(id, (err, user) => {
        err ? reject(err) : resolve(!!user);
      });
    });
  }
};
