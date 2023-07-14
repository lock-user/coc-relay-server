import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/healthcheck", async (req, res) => {
        res.status(200).json({ status: "relay server is running." });
    });

    return router;
}