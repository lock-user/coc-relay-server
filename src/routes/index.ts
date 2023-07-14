import goldpassRoutes from "./goldpass.routes";
import healthcheckRoutes from "./healthcheck.routes";
import { Router } from "express";

const router = Router();

router.use(healthcheckRoutes());
router.use(goldpassRoutes());

export default router;