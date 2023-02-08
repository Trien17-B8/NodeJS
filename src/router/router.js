import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initRouter = (app) => {
  router.get("/", homeController.homeController);
  router.get("/details/info/:id", homeController.detailsPage);
  return app.use("/", router);
};

export default initRouter;
