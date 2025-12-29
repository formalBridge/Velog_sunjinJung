import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/mainpage";
import { MainpageColumns } from "~/pages/MainPageColumns"

export function meta({}: Route.MetaArgs){
  return [
      { title: "index" },
      { name: "description", content: "INDEX PAGE" },
    ];
}

export default function MainPageIndex() {
  return (
    <MainpageColumns />
  );
}