"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = require("../controllers/home.controller");
const router = (0, express_1.Router)();
router.get("/", home_controller_1.welcome);
router.get("/login", home_controller_1.login);
router.get("/register", home_controller_1.register);
exports.default = router;
