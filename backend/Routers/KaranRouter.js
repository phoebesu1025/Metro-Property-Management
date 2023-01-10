const express = require("express");
const { Bonnie } = require("../Controllers/Bonnie");
const { Login } = require("../Controllers/Login");
const { Register } = require("../Controllers/Register");
const { StevePM } = require("../Controllers/StevePM");
const { UserAuth } = require("../Controllers/UserAuth");

const karanRouter = express.Router();

karanRouter.post("/register", Register);

karanRouter.post("/login", Login);

karanRouter.post("/login/stevePM", StevePM);

karanRouter.post("/auth/user", UserAuth);

karanRouter.post("/bonnie", Bonnie);

module.exports = {
  karanRouter,
};
