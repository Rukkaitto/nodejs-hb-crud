module.exports = (User) => ({
  getAll() {
    return User.find({});
  },

  getOne(id) {
    return User.findById(id);
  },

  create({ firstName, lastName }) {
    return User.create({
      firstName,
      lastName,
    });
  },

  update(id, { firstName, lastName }) {
    return User.findByIdAndUpdate(id, {
      firstName,
      lastName,
    });
  },

  delete(id) {
    return User.findByIdAndDelete(id);
  },
});
