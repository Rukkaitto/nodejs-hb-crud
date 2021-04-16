module.exports = (repository) => ({
  getUsers(req, res) {
    const { search } = req.query;
    repository.getWithLastName(search).then((users) => {
      res.render("home", { users });
    });
  },

  getUser(req, res) {
    repository.getOne(req.params.id).then((user) => {
      if (user) {
        const { birthday } = user;
        const birthdayString = birthday.toLocaleString();
        res.render("details", { user, birthday: birthdayString });
      } else {
        res.sendStatus(404);
      }
    });
  },

  createUser(req, res) {
    res.render("create");
  },

  updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.query;
    res.render("update", { id, firstName, lastName });
  },
});
