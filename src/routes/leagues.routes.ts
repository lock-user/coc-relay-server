import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    router.get("/capitalleagues", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "capitalleagues",
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

    router.get("/leagues", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "leagues",
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

    router.get("/leagues/:leagueId/seasons/:seasonId", async (req, res) => {
        const leagueId = req.params.leagueId;
        const seasonId = req.params.seasonId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `leagues/${leagueId}/seasons/${seasonId}`,
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

    router.get("/capitalleagues/:leagueId", async (req, res) => {
        const leagueId = req.params.leagueId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `capitalleagues/${leagueId}`,
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

    router.get("/capitalleagues", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "capitalleagues",
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

    router.get("/builderbaseleagues/:leagueId", async (req, res) => {
        const queryParams = req.query;
        const leagueId = req.params.leagueId;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `builderbaseleagues/${leagueId}`,
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

    router.get("/builderbaseleagues", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "builderbaseleagues",
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

    router.get("/leagues/:leagueId", async (req, res) => {
        const queryParams = req.query;
        const leagueId = req.params.leagueId;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `leagues/${leagueId}`,
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

    router.get("/leagues/:leagueId/seasons", async (req, res) => {
        const queryParams = req.query;
        const leagueId = req.params.leagueId;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `leagues/${leagueId}/seasons`,
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

    router.get("/warleagues/:leagueId", async (req, res) => {
        const leagueId = req.params.leagueId;
        axios({
            method: 'GET',
            url: constants.API_SERVER + `warleagues/${leagueId}`,
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

    router.get("/warleagues", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "warleagues",
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