import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import constants from "@/utils/constants";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const queryParams = req.query;

    axios({
        method: 'GET',
        url: constants.API_SERVER + `clans`,
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
        res.status(error.status).send(error.data);
    });
}