module.exports = (express, controller) => {
  const router = express.Router();

  router.get('/', controller.getUsers);

  router.get('/:id', controller.getUser);

  router.post('/create', controller.createUser);

  router.post('/update/:id', controller.updateUser);

  router.post('/delete/:id', controller.deleteUser);

  return router;
};
