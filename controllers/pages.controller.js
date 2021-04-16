module.exports = (repository) => ({
  getUsers(req, res) {
    repository.getAll().then((users) => {
      res.render('home', { users });
    });
  },

  createUser(req, res) {
    res.render('create');
  },

  updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.query;
    res.render('update', { id, firstName, lastName });
  },
});
