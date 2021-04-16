const ObjectId = require("mongoose").Types.ObjectId;

module.exports = (User) => ({
  getAll() {
    return User.find({});
  },

  getOne(id) {
    if (ObjectId.isValid(id)) {
      return User.findById(id);
    } 
  },

  create({ firstName, lastName }) {
    return User.create({
      firstName,
      lastName,
    });
  },

  update(id, { firstName, lastName }) {
    if (ObjectId.isValid(id)) {
      return User.findByIdAndUpdate(id, {
        firstName,
        lastName,
      });
    }
  },

  delete(id) {
    if (ObjectId.isValid(id)) {
      return User.findByIdAndDelete(id);
    }
  },
});
