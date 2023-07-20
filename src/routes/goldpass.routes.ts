import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/goldpass/seasons/current", async (req, res) => {
        axios({
            method: 'GET',
            url: constants.API_SERVER + "goldpass/seasons/current",
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            }
        }).then(response => {
            res.status(200).send(response.data);
        }).catch(error => {
            console.error(error);
            if(error.response) {
                res.status(error.response.status).send(error.response.data);
            } else {
                res.status(500).send({ message: "Internal Server Error" });
            }
        })

    });

    return router;
}