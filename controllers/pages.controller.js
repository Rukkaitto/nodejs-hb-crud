module.exports = (repository) => ({

  getUsers(req, res) {
    res.render('home', {
      users: repository.getAll()
    });
  }
});
