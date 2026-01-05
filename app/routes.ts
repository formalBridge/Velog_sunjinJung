import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("mainpage", "routes/mainpage.tsx", [
        route(":user_id", "routes/mainpage.$user_id.tsx"),
    ]),
] satisfies RouteConfig;