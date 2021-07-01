const express = require("express");
const Controller = require("./webhook.controller");
const elNene = require("../../domain/elNene");
const authMiddleware = require("../auth");


let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use(authMiddleware);

router.use((req, res, next) => {
  req.nene = elNene;
  next();
});


route.post("/", controller.ping);

export default router;
