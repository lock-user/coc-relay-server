export default {
    PORT: Number(process.env.PORT || 3333),
    PROJECT_NAME: process.env.PROJECT_NAME || "coc-relay",
    API_SERVER: "https://api.clashofclans.com/v1/",
    API_TOKEN: process.env.TOKEN
}