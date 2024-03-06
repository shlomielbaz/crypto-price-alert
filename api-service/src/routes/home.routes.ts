import { Router } from "express";
import { login, register, symbols, welcome } from "../controllers/home.controller";

const router = Router();

router.get("/", welcome);
router.get("/login", login);
router.get("/register", register);
router.get("/symbols", symbols);

export default router;
