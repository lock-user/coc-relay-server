import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/players/:id", async (req, res) => {
        const playerId = req.params.id;
        axios({
            method: 'GET',
            url: constants.API_SERVER + `players/${encodeURIComponent(playerId)}`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    router.post("/players/:id/verifytoken", async (req, res) => {
        const playerId = req.params.id;
        axios({
            method: 'POST',
            url: constants.API_SERVER + `players/${encodeURIComponent(playerId)}/verifytoken`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            data: {
                "token": req.body.token
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    return router;
}