import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import constants from "@/utils/constants";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {leagueId} = req.query;
    const queryParams = req.query;

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
        res.status(error.response.status).send(error.response.data);
    });
}