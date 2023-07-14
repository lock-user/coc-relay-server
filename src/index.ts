import app from "./app";
import { getServer } from "./server";
import constants from "./utils/constants"

const { PROJECT_NAME, PORT } = constants;
const server = getServer(app);

server.listen(PORT, () => {
    console.log(`Start ${PROJECT_NAME} Server on port ${PORT}`);
});