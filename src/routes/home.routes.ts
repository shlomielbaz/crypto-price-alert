import { Router } from "express";
import { login, register, welcome } from "../controllers/home.controller";

const router = Router();

router.get("/", welcome);
router.get("/login", login);
router.get("/register", register);

export default router;
