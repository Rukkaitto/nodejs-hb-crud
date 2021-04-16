module.exports = (repository) => ({
  getUsers(req, res, next) {
    repository
      .getAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        next(err);
      });
  },

  getUser(req, res, next) {
    repository
      .getOne(req.params.id)
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        next(err);
      });
  },

  createUser(req, res, next) {
    repository
      .create(req.body)
      .then((user) => {
        res.redirect("/");
      })
      .catch((err) => {
        next(err);
      });
  },

  updateUser(req, res, next) {
    repository
      .update(req.params.id, req.body)
      .then((user) => {
        res.redirect("/")
      })
      .catch((err) => {
        next(err);
      });
  },

  deleteUser(req, res, next) {
    repository
      .delete(req.params.id)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        next(err);
      });
  },
});
