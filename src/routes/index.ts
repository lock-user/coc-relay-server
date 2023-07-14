import goldpassRoutes from "./goldpass.routes";
import healthcheckRoutes from "./healthcheck.routes";
import { Router } from "express";
import playersRoutes from "./players.routes";

const router = Router();

router.use(healthcheckRoutes());
router.use(goldpassRoutes());
router.use(playersRoutes());

export default router;