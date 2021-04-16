module.exports = (express, controller) => {
  const router = express.Router();

  router.get("/", controller.getUsers);
  router.get("/create", controller.createUser);
  router.get("/:id", controller.getUser);
  router.get("/update/:id", controller.updateUser);

  return router;
};
