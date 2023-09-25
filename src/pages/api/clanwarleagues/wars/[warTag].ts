import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import constants from "@/utils/constants";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {warTag} = req.query;

    axios({
        method: 'GET',
        url: constants.API_SERVER + `clanwarleagues/wars/${encodeURIComponent(warTag as string)}`,
        headers: {
            Authorization: `Bearer ${constants.API_TOKEN}`
        }
    }).then(response => {
        res.status(200).send(response.data);
    }).catch(error => {
        res.status(error.response.status).send(error.response.data);
    });
}