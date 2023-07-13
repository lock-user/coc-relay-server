import healthcheckRoutes from "./healthcheck.routes";
import { Router } from "express";

const router = Router();

router.use(healthcheckRoutes());

export default router;