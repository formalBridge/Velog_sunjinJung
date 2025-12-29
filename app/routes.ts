import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("mainpage", "routes/mainpage.tsx", [
        index("routes/mainpage._index.tsx"),
    ]),
] satisfies RouteConfig;