import axios from "axios";
import constants from "../utils/constants";
import { Router } from "express";
import asyncify from "express-asyncify";

export default function routeGenerate() {
    const router = asyncify(Router());

    // 특정 지역의 클랜 랭킹
    router.get("/locations/:locationId/rankings/clans", async (req, res) => {
        const locationId = req.params.locationId;
        const queryParams = req.query;
        
        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}/rankings/clans`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 특정 지역의 플레이어 랭킹
    router.get("/locations/:locationId/rankings/players", async (req, res) => {
        const locationId = req.params.locationId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}/rankings/players`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 특정 지역의 장인기지 플레이어 랭킹
    router.get("/locations/:locationId/rankings/players-builder-base", async (req, res) => {
        const locationId = req.params.locationId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}/rankings/players-builder-base`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 특정 지역의 장인기지 클랜 랭킹
    router.get("/locations/:locationId/rankings/clans-builder-base", async (req, res) => {
        const locationId = req.params.locationId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}/rankings/clans-builder-base`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 게임 내 모든 지역
    router.get("/locations", async (req, res) => {
        const queryParams = req.query;
        axios({
            method: 'GET',
            url: constants.API_SERVER + "locations",
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 특정 지역의 클랜 캐피탈 랭킹
    router.get("/locations/:locationId/rankings/capitals", async (req, res) => {
        const locationId = req.params.locationId;
        const queryParams = req.query;

        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}/rankings/capitals`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            params: {
                limit: queryParams.limit,
                after: queryParams.after,
                before: queryParams.before
            }
        }).then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error(error);
            res.status(500);
        });
    });

    // 특정 지역에 대한 정보
    router.get("/locations/:locationId", async (req, res) => {
        const locationId = req.params.locationId;
        axios({
            method: 'GET',
            url: constants.API_SERVER + `locations/${encodeURIComponent(locationId)}`,
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

    return router;
}