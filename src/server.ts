import { Express } from "express";
import http from "http";

export const getServer = (app?: Express) => {
    let server = http.createServer(app);

    return server;
};