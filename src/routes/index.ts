import clansRoutes from "./clans.routes";
import goldpassRoutes from "./goldpass.routes";
import healthcheckRoutes from "./healthcheck.routes";
import leaguesRoutes from "./leagues.routes";
import locationsRoutes from "./locations.routes";
import playersRoutes from "./players.routes";
import { Router } from "express";

const router = Router();

router.use(clansRoutes());
router.use(healthcheckRoutes());
router.use(goldpassRoutes());
router.use(leaguesRoutes());
router.use(locationsRoutes());
router.use(playersRoutes());

export default router;