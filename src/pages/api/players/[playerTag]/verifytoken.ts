import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import constants from "@/utils/constants";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const {playerTag} = req.query;
        const {token} = req.body;

        axios({
            method: 'POST',
            url: constants.API_SERVER + `players/${encodeURIComponent(playerTag as string)}/verifytoken`,
            headers: {
                Authorization: `Bearer ${constants.API_TOKEN}`
            },
            data: {
                "token": token
            }
        }).then(response => {
            res.status(200).send(response.data);
        }).catch(error => {
            res.status(error.response.status).send(error.response.data);
        });
    } else {
        res.status(405).send({message: "Please request using the post method."})
    }
}