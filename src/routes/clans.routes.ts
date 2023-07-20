import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/clans", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "clans",
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                name: queryParams.name,
                warFrequency: queryParams.warFrequency,
                locationId: queryParams.locationId,
                minMembers: queryParams.minMembers,
                maxMembers: queryParams.maxMembers,
                minClanPoints: queryParams.minClanPoints,
                minClanLevel: queryParams.minClanLevel,
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before,
                labelIds: queryParams.labelIds
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
        });
    });

    router.get("/clans/:tag", async (req, res) => {
        const clanTag = req.params.tag;
        axios({
            method: 'GET',
            url: constants.API_SERVER + `clans/${encodeURIComponent(clanTag)}`,
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
        });
    });

    router.get("/clans/:tag/members", async (req, res) => {
        const clanTag = req.params.tag;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `clans/${encodeURIComponent(clanTag)}/members`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
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
        });
    });

    router.get("/clans/:tag/capitalraidseasons", async (req, res) => {
        const clanTag = req.params.tag;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `clans/${encodeURIComponent(clanTag)}/capitalraidseasons`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
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
        });
    });

    return router;
}