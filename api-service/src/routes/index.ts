import express, { Application } from "express";
import homeRoutes from "./home.routes";

const router = express.Router();

router.use("/api/v1", homeRoutes);

export default router;