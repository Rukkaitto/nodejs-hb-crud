module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/', controller.getUsers);

  router.get('/:id', controller.getUser);

  router.post('/', controller.createUser);

  router.put('/:id', controller.updateUser);

  router.delete('/:id', controller.deleteUser);

  return router;
};
