module.exports = (repository) => ({
  async getUsers(req, res) {
    const users = await repository.getAll();
    res.json(users);
  },

  async getUser(req, res) {
    const user = await repository.getOne(req.params.id);
    if (!!user) {
      res.json(user);
    }
    res.status(404).send({ status: "User not found" });
  },

  async createUser(req, res) {
    const user = await repository.create(req.body);
    res.json(user);
  },

  async updateUser(req, res) {
    const user = await repository.update(req.params.id, req.body);
    if (!!user) {
      res.json(user);
    }
    res.status(404).send({ status: "User not found" });
  },

  async deleteUser(req, res) {
    const ok = await repository.delete(req.params.id);
    res.sendStatus(ok ? 200 : 404);
  },
});
