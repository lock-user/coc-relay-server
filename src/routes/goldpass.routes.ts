import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/goldpass", async (req, res) => {
        const requestHeader = {
            "Authorization": `Bearer ${constants.API_TOKEN}`
        };

        axios.get(`${constants.API_SERVER}goldpass/seasons/current`, { headers: requestHeader })
            .then(response => {
                res.send(response.data);
            }).catch(error => {
                console.error(error);
                res.status(500);
            });
    });

    return router;
}